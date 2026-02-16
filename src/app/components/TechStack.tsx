'use client';

import { motion, useReducedMotion } from 'framer-motion';

const categories = [
  {
    title: "Languages & Frameworks",
    description: "Core development stack",
    items: ["Python", "TypeScript", "JavaScript", "HTML", "CSS", "React", "Node.js", "NextJS", "Flask", "Django", "FastAPI"],
  },
  {
    title: "Cloud & Infrastructure",
    description: "Platforms & DevOps",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Serverless Framework", "ECS/ECR", "EKS", "FarGate", "Lambda", "API Gateway", "EC2", "IAM", "KMS"],
  },
  {
    title: "Data Engineering",
    description: "Pipelines, messaging & databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "Redis", "Elasticsearch", "BigQuery", "S3", "SQS", "SNS", "EventBridge", "Kinesis", "PySpark"],
  },
  {
    title: "Enterprise & Integration",
    description: "CRM, automation & AI",
    items: ["Salesforce", "GraphQL", "OpenAI API", "RAG", "UiPath", "HubSpot", "Shopify"],
  },
];

export default function TechStack() {
  const prefersReducedMotion = useReducedMotion();
  const skip = !!prefersReducedMotion;

  return (
    <section id="skills" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-bold text-white mb-2">
          Tech Stack
        </h2>
        <div className="w-16 h-1 bg-electricBlue mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={skip ? undefined : { opacity: 0, y: 30 }}
              whileInView={skip ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={skip ? undefined : { duration: 0.5, delay: catIndex * 0.1, ease: 'easeOut' }}
              className={`bg-charcoal card-glow border border-electricBlue/10 rounded-xl p-6 hover:border-electricBlue/30 hover:shadow-[0_0_30px_rgba(42,195,222,0.15)] transition-all transition-shadow duration-300 hover:-translate-y-0.5 ${
                catIndex >= 2 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <h3 className="font-mono text-lg font-semibold text-electricBlue mb-1">
                {cat.title}
              </h3>
              <p className="text-sm text-mutedGray mb-4">{cat.description}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item, itemIndex) => (
                  <motion.span
                    key={item}
                    initial={skip ? undefined : { opacity: 0, scale: 0.8 }}
                    whileInView={skip ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={skip ? undefined : { duration: 0.3, delay: catIndex * 0.1 + itemIndex * 0.04, ease: 'easeOut' }}
                    className="px-3 py-1 text-xs font-mono bg-navy border border-steel/30 text-lightGray rounded-full hover:border-cyberTeal/50 hover:text-white hover:bg-cyberTeal/10 transition-colors duration-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
