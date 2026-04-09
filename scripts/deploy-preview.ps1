$ErrorActionPreference = 'Stop'

$repoRoot = Split-Path -Parent $PSScriptRoot
$envFile = Join-Path $repoRoot '.env.local'
$projectFile = Join-Path $repoRoot '.vercel\project.json'

if (!(Test-Path $envFile)) {
  throw ".env.local is missing. Add DATABASE_URL first."
}

if (!(Test-Path $projectFile)) {
  throw ".vercel\\project.json is missing. Run 'vercel link' before deploying."
}

$project = Get-Content $projectFile | ConvertFrom-Json
$scope = $project.orgId

if ([string]::IsNullOrWhiteSpace($scope)) {
  throw ".vercel\\project.json is missing orgId. Run 'vercel link' again before deploying."
}

function Get-EnvMap {
  param([string]$Path)

  $map = @{}
  foreach ($line in Get-Content $Path) {
    $trimmed = $line.Trim()
    if (-not $trimmed -or $trimmed.StartsWith('#') -or -not $trimmed.Contains('=')) {
      continue
    }

    $index = $trimmed.IndexOf('=')
    $key = $trimmed.Substring(0, $index).Trim()
    $value = $trimmed.Substring($index + 1).Trim().Trim('"').Trim("'")
    $map[$key] = $value
  }

  return $map
}

$envMap = Get-EnvMap -Path $envFile
$required = @('DATABASE_URL')
$missing = @($required | Where-Object { -not $envMap.ContainsKey($_) -or [string]::IsNullOrWhiteSpace($envMap[$_]) })

if ($missing.Count -gt 0) {
  throw "Missing required keys in .env.local: $($missing -join ', ')"
}

$buildEnvArgs = @()
$runtimeEnvArgs = @()

foreach ($key in $required) {
  $pair = "$key=$($envMap[$key])"
  $buildEnvArgs += '--build-env'
  $buildEnvArgs += $pair
  $runtimeEnvArgs += '--env'
  $runtimeEnvArgs += $pair
}

if ($envMap.ContainsKey('NEXT_PUBLIC_SITE_URL') -and -not [string]::IsNullOrWhiteSpace($envMap['NEXT_PUBLIC_SITE_URL'])) {
  $pair = "NEXT_PUBLIC_SITE_URL=$($envMap['NEXT_PUBLIC_SITE_URL'])"
  $buildEnvArgs += '--build-env'
  $buildEnvArgs += $pair
  $runtimeEnvArgs += '--env'
  $runtimeEnvArgs += $pair
}

$command = @(
  'deploy',
  '--target',
  'preview',
  '--yes',
  '--scope',
  $scope
) + $buildEnvArgs + $runtimeEnvArgs

Write-Host 'Deploying preview with explicit DB mirror env...' -ForegroundColor Cyan
$output = & vercel @command
$output | ForEach-Object { Write-Host $_ }
