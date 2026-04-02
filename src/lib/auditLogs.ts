import { AuditLogEntry } from '../components/AuditTrail';

export const AUDIT_LOGS: Record<string, AuditLogEntry[]> = {
  "gufron": [
    { timestamp: "2025-10-15 09:00", event: "ID_VERIFIED", detail: "Government ID check completed by Ops Command. Identity confirmed." },
    { timestamp: "2025-10-15 10:30", event: "LICENSE_VALIDATED", detail: "HPWKI Climbing License #7721 verified active and in good standing." },
    { timestamp: "2025-11-01 14:00", event: "SAFETY_TRAINING", detail: "Completed advanced sulfur gas mitigation workshop and emergency response drill." },
    { timestamp: "2026-01-10 08:00", event: "EQUIPMENT_AUDIT", detail: "Personal safety gear (gas mask, torch) inspected and certified for 2026 season." }
  ],
  "rendi": [
    { timestamp: "2025-10-16 09:00", event: "ID_VERIFIED", detail: "Government ID check completed. Biometric match confirmed." },
    { timestamp: "2025-10-16 11:00", event: "LICENSE_VALIDATED", detail: "HPWKI License #8812 verified. Authorized for crater descent." },
    { timestamp: "2025-12-05 15:00", event: "FIRST_AID_CERT", detail: "Red Cross First Aid certification renewed. Valid through 2027." },
    { timestamp: "2026-02-14 10:00", event: "RESCUE_DRILL", detail: "Participated in annual vertical rescue simulation at Ijen Crater." }
  ],
  "yandi": [
    { timestamp: "2025-09-20 08:30", event: "ID_VERIFIED", detail: "Identity verification successful." },
    { timestamp: "2025-09-21 13:00", event: "OPS_CERTIFIED", detail: "Tourism Operations Certificate verified by Dispar." },
    { timestamp: "2026-01-05 09:00", event: "PROTOCOL_REVIEW", detail: "Updated safety briefing protocols for 2026 operational year." }
  ],
  "boy": [
    { timestamp: "2025-11-12 09:00", event: "ID_VERIFIED", detail: "Local resident ID verification completed." },
    { timestamp: "2025-11-13 14:00", event: "GUIDE_CERTIFIED", detail: "HPI Technical Guide certification verified." },
    { timestamp: "2026-01-20 11:00", event: "LOGISTICS_AUDIT", detail: "Equipment maintenance and logistics management protocols audited." }
  ],
  "fredi": [
    { timestamp: "2025-08-10 09:00", event: "ID_VERIFIED", detail: "Identity check completed." },
    { timestamp: "2025-08-11 10:00", event: "LICENSE_VERIFIED", detail: "Professional Transport License (Dishub) verified active." },
    { timestamp: "2025-12-15 14:00", event: "VEHICLE_INSPECT", detail: "Primary transport vehicle passed multi-point safety inspection." },
    { timestamp: "2026-02-01 08:30", event: "DEFENSIVE_DRIVING", detail: "Completed advanced defensive driving course for mountain terrain." }
  ],
  "anjas": [
    { timestamp: "2025-10-20 09:00", event: "ID_VERIFIED", detail: "Identity verification completed." },
    { timestamp: "2025-10-21 11:00", event: "LICENSE_VALIDATED", detail: "HPWKI License verified." },
    { timestamp: "2026-01-15 14:00", event: "PHOTO_SAFETY", detail: "Certified in safe photography zones and guest positioning." }
  ],
  "taufik": [
    { timestamp: "2025-11-05 09:00", event: "ID_VERIFIED", detail: "Identity check completed." },
    { timestamp: "2025-11-06 10:00", event: "LICENSE_VALIDATED", detail: "HPWKI License verified." },
    { timestamp: "2026-02-10 13:00", event: "COMM_TRAINING", detail: "Completed guest communication and organization workshop." }
  ],
  "kiki": [
    { timestamp: "2025-12-01 09:00", event: "ID_VERIFIED", detail: "Identity verification completed." },
    { timestamp: "2025-12-02 11:00", event: "LICENSE_VALIDATED", detail: "HPWKI License verified." },
    { timestamp: "2026-03-01 10:00", event: "NATURE_CERT", detail: "Nature interpretation and spiritual guidance certification updated." }
  ],
  "holili": [
    { timestamp: "2025-09-15 09:00", event: "ID_VERIFIED", detail: "Identity check completed." },
    { timestamp: "2025-09-16 10:00", event: "LICENSE_VERIFIED", detail: "Professional Driver License verified." },
    { timestamp: "2026-01-12 14:00", event: "SERVICE_AUDIT", detail: "Customer service and wholehearted dedication audit passed." }
  ],
  "fauzi": [
    { timestamp: "2025-10-25 09:00", event: "ID_VERIFIED", detail: "Identity verification completed." },
    { timestamp: "2025-10-26 11:00", event: "LICENSE_VALIDATED", detail: "HPI Guide License verified." },
    { timestamp: "2026-02-20 14:00", event: "GUEST_RELATIONS", detail: "Completed guest connection and fun guiding workshop." }
  ],
  "joyo": [
    { timestamp: "2025-08-05 09:00", event: "ID_VERIFIED", detail: "Identity check completed." },
    { timestamp: "2025-08-06 10:00", event: "LICENSE_VERIFIED", detail: "Professional Driver Certification verified." },
    { timestamp: "2025-11-20 14:00", event: "VEHICLE_INSPECT", detail: "Vehicle cleanliness and safety standards audit: 100% score." },
    { timestamp: "2026-02-15 08:30", event: "PRECISION_DRIVING", detail: "Precision driving and time management protocols reviewed." }
  ],
  "yusuf": [
    { timestamp: "2025-09-10 09:00", event: "ID_VERIFIED", detail: "Identity check completed." },
    { timestamp: "2025-09-11 10:00", event: "LICENSE_VERIFIED", detail: "Professional Driver License verified." },
    { timestamp: "2026-01-08 14:00", event: "LOGISTICS_REVIEW", detail: "Logistical support and friendly service protocols updated." }
  ],
  "dika": [
    { timestamp: "2025-10-05 09:00", event: "ID_VERIFIED", detail: "Identity check completed." },
    { timestamp: "2025-10-06 10:00", event: "LICENSE_VERIFIED", detail: "Professional Driver License verified." },
    { timestamp: "2026-02-05 14:00", event: "SAFETY_FIRST", detail: "Safety-first driving and guest comfort protocols reviewed." }
  ],
  "pras": [
    { timestamp: "2025-11-15 09:00", event: "ID_VERIFIED", detail: "Identity check completed." },
    { timestamp: "2025-11-16 10:00", event: "LICENSE_VERIFIED", detail: "Professional Driver License verified." },
    { timestamp: "2026-01-25 14:00", event: "LANG_CERT", detail: "English communication and guest service certification updated." }
  ],
  "jvto_org": [
    { timestamp: "2015-05-20 10:00", event: "ID_VERIFIED", detail: "Initial Business Registration (NIB) verified and archived." },
    { timestamp: "2015-06-15 14:00", event: "LICENSE_VALIDATED", detail: "TDUP Tourism License issued after full site inspection." },
    { timestamp: "2020-03-10 09:00", event: "SAFETY_TRAINING", detail: "CHSE (Cleanliness, Health, Safety, and Environmental Sustainability) Certification awarded." },
    { timestamp: "2023-12-01 11:30", event: "SYSTEM_UPDATE", detail: "Migration to Forensic Registry v1.9 completed. All hashes re-validated." },
    { timestamp: "2024-02-15 16:45", event: "ID_VERIFIED", detail: "Annual legal audit completed. No discrepancies found." }
  ]
};
