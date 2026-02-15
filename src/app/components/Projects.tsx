const projects = [
  {
    title: "Cloud Infrastructure Platform",
    description:
      "Scalable cloud infrastructure serving millions of daily readers with high availability and fault tolerance.",
    metrics: "99.99% uptime • Millions of daily requests",
    tags: ["AWS", "Terraform", "Docker", "Kubernetes"],
  },
  {
    title: "Real-Time Data Pipeline",
    description:
      "ETL/ELT pipeline processing terabytes of content data daily with Apache Spark and Airflow orchestration.",
    metrics: "Terabytes processed daily • Sub-second latency",
    tags: ["Python", "Spark", "Airflow", "BigQuery"],
  },
  {
    title: "ML Inference Service",
    description:
      "Production ML pipeline for content recommendation and classification, serving predictions at scale.",
    metrics: "< 50ms p99 latency • 10M+ predictions/day",
    tags: ["Python", "FastAPI", "Docker", "Redis"],
  },
  {
    title: "API Gateway & Microservices",
    description:
      "Distributed microservices architecture handling high-throughput content delivery and integration.",
    metrics: "500+ req/s throughput • Zero-downtime deployments",
    tags: ["TypeScript", "Node.js", "GraphQL", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white mb-2">
          What I&apos;ve Built
        </h2>
        <div className="w-16 h-1 bg-electricBlue mb-4 rounded-full" />
        <p className="text-mutedGray mb-12 max-w-2xl text-base sm:text-lg">
          From cloud infrastructure that scales to millions of users to data
          pipelines processing terabytes daily, here&apos;s how I solve complex
          technical challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, index) => (
            <div
              key={p.title}
              className={`bg-charcoal border border-electricBlue/10 rounded-xl p-6 hover:border-electricBlue/30 hover:-translate-y-0.5 transition-all duration-300 group ${
                index < 2 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <h3 className="font-mono text-lg font-semibold text-white mb-2 group-hover:text-electricBlue transition-colors">
                {p.title}
              </h3>
              <p className="text-mutedGray text-sm mb-3 leading-relaxed">
                {p.description}
              </p>
              <p className="text-xs text-steel mb-4">{p.metrics}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs font-mono bg-navy border border-steel/30 text-cyberTeal rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-steel italic">
                Enterprise production system
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
