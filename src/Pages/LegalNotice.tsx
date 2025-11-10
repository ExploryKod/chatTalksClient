import { Link } from "react-router-dom";

const LegalNotice = () => {
    return (
        <main className="page page--legal">
            <Link to="/" className="page__back-button">
                Retour
            </Link>
            <header className="page__header">
                <h1>Mentions Légales</h1>
                <p>Dernière mise à jour : 10 novembre 2025</p>
            </header>

            <section className="page__section">
                <h2>1. Éditeur du Site</h2>
                <p>
                    Le site Cat Talks est édité dans le cadre d&apos;un projet éducatif et de démonstration 
                    par l&apos;équipe de développement du projet.
                </p>
                <p>
                    <strong>Important : Cat Talks est un site de démonstration à des fins éducatives.</strong> Ce Site est destiné 
                    uniquement à des fins de démonstration et d&apos;apprentissage. Les utilisateurs sont expressément informés 
                    dès la page de connexion que ce Site est une démonstration et qu&apos;ils ne doivent pas utiliser leurs 
                    vraies données personnelles (notamment leur adresse email réelle) lors de l&apos;inscription ou de l&apos;utilisation 
                    du service. Un avertissement clair est affiché sur la page de connexion et d&apos;inscription pour informer 
                    les utilisateurs que la confirmation par e-mail est désactivée.
                </p>
                <p>
                    <strong>Contact :</strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a>
                </p>
            </section>

            <section className="page__section">
                <h2>2. Directeur de la Publication</h2>
                <p>
                    Le directeur de la publication est l&apos;équipe de développement du projet Cat Talks.
                </p>
                <p>
                    <strong>Contact :</strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a>
                </p>
            </section>

            <section className="page__section">
                <h2>3. Hébergeur</h2>
                <p>
                    <strong>Hébergement du Site (Frontend) :</strong><br />
                    Le Site est hébergé par Vercel Inc., situé au 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
                </p>
                <p>
                    Pour plus d&apos;informations sur la conformité de Vercel aux normes de sécurité et de confidentialité des données, 
                    consultez : <a href="https://vercel.com/docs/security/compliance" target="_blank" rel="noopener noreferrer">https://vercel.com/docs/security/compliance</a>
                </p>
                <p>
                    Pour consulter la politique de protection des données de Vercel, 
                    consultez : <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>
                </p>
                <p>
                    <strong>Hébergement de l&apos;API (Backend) :</strong><br />
                    L&apos;API backend est hébergée par Render.com, situé au 760 Market Street, 
                    Suite 1100, San Francisco, CA 94102, États-Unis.
                </p>
                <p>
                    <strong>Hébergement de la base de données :</strong><br />
                    Les données du Site sont stockées dans une base de données MySQL hébergée par Clever Cloud SAS, 
                    société par actions simplifiée au capital de 22 952 €, immatriculée au RCS de Nantes sous le numéro 
                    B 524 172 699.
                </p>
                <p>
                    <strong>Siège social de Clever Cloud SAS :</strong><br />
                    4 rue Voltaire, 44000 Nantes, France<br />
                    Numéro de TVA : FR 87 524 172 699
                </p>
                <p>
                    Pour plus d&apos;informations sur la politique de protection des données de Clever Cloud, 
                    consultez : <a href="https://www.clever.cloud/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.clever.cloud/privacy-policy/</a>
                </p>
                <p>
                    <em>Note : Les serveurs physiques de Clever Cloud sont situés dans des centres de données sécurisés. 
                    Pour plus d&apos;informations sur l&apos;emplacement exact des serveurs, veuillez consulter la documentation 
                    de Clever Cloud ou nous contacter.</em>
                </p>
            </section>

            <section className="page__section">
                <h2>4. Contact</h2>
                <p>
                    Pour toute question, réclamation ou signalement concernant le Site Cat Talks, vous pouvez nous contacter 
                    à l&apos;adresse email suivante :
                </p>
                <p>
                    <strong>Email :</strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a>
                </p>
                <p>
                    Nous nous engageons à répondre à vos demandes dans les meilleurs délais.
                </p>
            </section>

            <section className="page__section">
                <h2>5. Propriété Intellectuelle</h2>
                <p>
                    Précisez les droits de propriété intellectuelle relatifs aux contenus présentés sur
                    le site (textes, images, logos) et les conditions de reproduction.
                </p>
            </section>

            <section className="page__section">
                <h2>6. Responsabilité</h2>
                <p>
                    Ajoutez une clause de limitation de responsabilité concernant les informations
                    fournies et les éventuels liens hypertextes vers des sites tiers.
                </p>
            </section>

            <section className="page__section">
                <h2>7. Signalement de Contenus Illicites</h2>
                <p>
                    Conformément à la législation en vigueur, tout utilisateur peut signaler un contenu illicite ou portant 
                    atteinte aux droits des tiers présents sur le Site Cat Talks.
                </p>
                <p>
                    Pour signaler un tel contenu, vous pouvez nous contacter à l&apos;adresse email suivante : 
                    <strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a></strong>.
                </p>
                <p>
                    Votre signalement doit contenir les informations suivantes :
                </p>
                <ul>
                    <li>Vos coordonnées (nom, prénom, adresse email)</li>
                    <li>La description précise du contenu signalé</li>
                    <li>L&apos;URL ou l&apos;emplacement du contenu sur le Site</li>
                    <li>Les motifs du signalement (contenu illicite, atteinte aux droits, etc.)</li>
                </ul>
                <p>
                    Nous nous engageons à examiner votre signalement dans les meilleurs délais et à prendre les mesures 
                    appropriées conformément à la réglementation en vigueur.
                </p>
            </section>

            <footer className="page__footer">
                <p>
                    Ces mentions légales sont fournies à titre informatif pour le site de démonstration Cat Talks. 
                    Pour toute question, veuillez nous contacter à l&apos;adresse 
                    <strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a></strong>.
                </p>
            </footer>
        </main>
    );
};

export default LegalNotice;

