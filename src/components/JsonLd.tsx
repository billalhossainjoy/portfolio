const siteUrl = "https://billalhossain.dev";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Billal Hossain",
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
  description:
    "Full-stack developer specialising in Next.js, React, Node.js, NestJS and TypeScript.",
  email: "bilalhossain.bhj@gmail.com",
  sameAs: [
    "https://github.com/billalhossainjoy",
    "https://www.linkedin.com/in/billalhossainjoy/",
    "https://www.facebook.com/8illal",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "TypeScript",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
}
