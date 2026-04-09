import type { Metadata } from 'next';
import CrewProfile from '../ProfilePage';
import { SSOT } from '../../../lib/ssot';
import { buildPageMetadata } from '../../../lib/page-metadata';

type CrewProfilePageProps = {
  params: Promise<{
    crewId: string;
  }>;
};

export async function generateMetadata({ params }: CrewProfilePageProps): Promise<Metadata> {
  const { crewId } = await params;
  const crewMember = SSOT.crew.find((crew) => crew.id === crewId);

  if (!crewMember?.profile) {
    return buildPageMetadata(`/team/${crewId}`, {
      title: 'JVTO Field Team Member | Java Volcano Tour Operator',
      description: 'JVTO field team profile and role context.',
    });
  }

  return buildPageMetadata(`/team/${crewId}`, {
    title: `${crewMember.name} | ${crewMember.role} | Java Volcano Tour Operator`,
    description: `Meet ${crewMember.name}, ${crewMember.role} at JVTO. ${crewMember.profile.archetype}. Expertise includes ${crewMember.profile.expertise.join(', ')}.`,
  });
}

export default async function CrewProfilePage() {
  return <CrewProfile />;
}

