import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img className={styles.brandLogo} src="img/nexusflow-logo.png" alt="NexusFlow — Data Pipelines & Streaming" />
        <p className={styles.eyebrow}>OPEN-SOURCE DATA PLATFORM</p>
        <Heading as="h1" className="hero__title">Build reliable data flows with NexusFlow</Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Explore the docs
          </Link>
          <a className="button button--outline button--lg" href="https://github.com/ailake-io/nexusflow">
            View on GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Open-source data integration and AI-ready pipelines"
      description="NexusFlow connects sources and destinations through fast, observable data pipelines.">
      <HomepageHeader />
      <main>
        <section className={styles.intro}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Connect anything</h2>
                <p>Move data across databases, warehouses, files, APIs, streams, and vector stores through one pipeline model.</p>
              </div>
              <div className="col col--4">
                <h2>Transform with clarity</h2>
                <p>Use visual pipeline building blocks or SQL when you need precise joins, filters, casts, and enrichment.</p>
              </div>
              <div className="col col--4">
                <h2>Operate with confidence</h2>
                <p>Checkpoints, observability, RBAC, alerts, and reproducible deployments keep production flows under control.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.quickstart}>
          <div className="container">
            <div className="row">
              <div className="col col--7">
                <p className={styles.eyebrow}>START IN MINUTES</p>
                <h2>Run the platform locally</h2>
                <p>The fastest path is the published Docker image. The getting started guide covers secrets, storage, metadata, and your first pipeline.</p>
              </div>
              <div className="col col--5">
                <pre><code>{`docker volume create nexusflow_data\ndocker run -d -p 8080:8080 \\\n  -e NEXUS_JWT_SECRET="$(openssl rand -hex 32)" \\\n  -e NEXUS_ENCRYPTION_KEY="$(openssl rand -hex 32)" \\\n  thiagolange/nexusflow:latest`}</code></pre>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.creator}>
          <div className="container">
            <div className={styles.creatorCard}>
              <img className={styles.creatorAvatar} src="https://avatars.githubusercontent.com/u/25437144?v=4" alt="Thiago Egon Lange" />
              <div>
                <p className={styles.eyebrow}>CREATED BY</p>
                <h2>Thiago Egon Lange</h2>
                <p>NexusFlow is an open-source project created and maintained by Thiago.</p>
                <p><a href="https://github.com/ThiagoLange">GitHub profile →</a> · <a href="mailto:contato@dadosidados.net.br">contato@dadosidados.net.br</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
