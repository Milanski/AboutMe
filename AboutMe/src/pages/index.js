import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="container">
                  <h2>💼 Professional Summary</h2>
                  <p>
                      Experienced <strong>Senior Software Architect and Developer</strong>
                      with extensive expertise in designing
                      and developing scalable, cloud-based solutions. Proficient
                      in <strong>Java, Spring, Kubernetes, Azure,
                      and Microservices</strong>, with a strong focus
                      on <strong>security mechanisms</strong> such as
                      <strong> OAuth2, OIDC, and mTLS</strong>. Passionate
                      about <strong>modern software architecture, clean code,
                      and performance optimization</strong>. Skilled in <strong>event-driven
                      architecture, domain-driven design (DDD),
                      clean code, SOLID design principles, and hexagonal
                      architecture</strong>.
                  </p>
                  <p>
                      Strong background in <strong>cloud computing, DevOps, and
                      CI/CD automation</strong> with <strong>AWS, Azure,
                      Kubernetes, Docker, Helm, Terraform, and GitHub
                      Actions</strong>. Extensive experience with
                      <strong> database query optimization, database design, and
                          modeling</strong> using <strong>SQL & NoSQL
                      technologies </strong>
                      like <strong> Oracle, PostgreSQL, MySQL, MongoDB, and
                      Redis</strong>.
                  </p>
                  <p>
                      Proficient in <strong>test-driven development (TDD) and
                      automated testing</strong> with tools such as
                      <strong>JUnit, Mockito, RestAssured, Testcontainers,
                          WireMock, PowerMock, and ArchUnit</strong>.
                      Experienced in <strong>API documentation</strong> and
                      architectural visualization using <strong>OpenAPI,
                      SwaggerUI,
                      Docusaurus, and PlantUML</strong>.
                  </p>

          </div>
          <div className={styles.buttons}>
              <Link
                      className="button button--secondary button--lg"
                      to="/docs/intro">
                  More
              </Link>
          </div>
      </div>
    </header>
  );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
            <Layout
                    title={`Hello from ${siteConfig.title}`}
                    description="Description will go into a meta tag in <head />">
                <HomepageHeader/>
                <main>
                    <HomepageFeatures/>
                </main>
            </Layout>
    );
}
