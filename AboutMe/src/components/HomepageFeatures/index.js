import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'Tutorials',
        link: 'docs/category/Tutorials',
        Svg: require('@site/static/img/features_tutorials_480.svg').default,
        description: (
                <>
                    Step by step guidance.
                    <p style={{color:"greenyellow"}} > Yet needs to be filled with life ;-).</p>
                </>
        ),
    },
    {
        title: 'How-To',
        link: 'docs/category/How-To',
        Svg: require('@site/static/img/features_how_to_512.svg').default,
        description: (
          <>
            As the name implies - How-To do things, interesting to deepen some knowledge.
          </>
        ),
    },
    {
        title: 'Reference',
        link: 'docs/category/Reference',
        Svg: require('@site/static/img/features_reference_512.svg').default,
        description: (
                <>
                    Colleagues with whom I worked together and their `2-cents`
                    about me.
                    <p style={{color: "greenyellow"}}> Some may be anonymous.</p>
                </>
        ),
    },
    {
        title: 'Explanation',
        link: 'docs/category/Explanation',
        Svg: require('@site/static/img/features_explain_512.svg').default,
        description: (
                <>
                    Explaining why things do what they do.
                    <p style={{color: "greenyellow"}}> Yet needs to be filled
                        with life ;-).</p>
                </>
        ),
    },
    // {
    //   title: 'Focus on What Matters',
    //   Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //       Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
  //       ahead and move your docs into the <code>docs</code> directory.
  //     </>
  //   ),
  // },
  // {
  //   title: 'Powered by React',
  //   Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Extend or customize your website layout by reusing React. Docusaurus can
  //       be extended while reusing the same header and footer.
  //     </>
  //   ),
  // },
];

function Feature({Svg, link, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <a href={link}>
          <div className="text--center">
              <Svg className={styles.featureSvg} role="img"/>
          </div>
      </a>
      <div className="text--center padding-horiz--md">
          <a href={link}>
              <Heading as="h3">{title}</Heading>
          </a>
          <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
