import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <main className="page page--legal">
            <Link to="/" className="page__back-button">
                Retour
            </Link>
            <header className="page__header">
                <h1>Politique de Protection des Données</h1>
                <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </header>

            <section className="page__section">
                <h2>Introduction</h2>
                <p>
                    La présente Politique a pour objectif de vous informer du traitement de vos données personnelles 
                    et de l&apos;utilisation de cookies lors de votre navigation sur le site web Cat Talks 
                    (le « <strong>Site</strong> »), accessible à l&apos;adresse <strong>https://chat-talks-client.vercel.app</strong>.
                </p>
                <p>
                    Cat Talks est un site de démonstration proposant une application de chat en temps réel. 
                    À travers cette Politique, nous souhaitons que vous compreniez la nature des informations personnelles 
                    que nous recueillons, la façon dont nous les utilisons, avec qui nous les partageons, comment nous nous 
                    efforçons de les protéger, comment vous pouvez exercer vos droits et, enfin, comment nous contacter.
                </p>
                <p>
                    <strong>Important : Cat Talks est un site de démonstration à des fins éducatives.</strong> Les utilisateurs 
                    sont expressément informés dès la page de connexion que ce Site est une démonstration et qu&apos;ils ne doivent 
                    <strong> pas utiliser leurs vraies données personnelles</strong> (notamment leur adresse email réelle) lors de 
                    l&apos;inscription ou de l&apos;utilisation du service. Un avertissement clair est affiché sur la page de connexion 
                    et d&apos;inscription pour informer les utilisateurs que la confirmation par e-mail est désactivée et qu&apos;ils 
                    peuvent utiliser un faux compte avec un faux email.
                </p>
                <p>
                    Le présent document a également pour objet de vous communiquer toutes les informations imposées par 
                    l&apos;article 32 de la loi Informatique et Libertés et par l&apos;article 13 du Règlement UE 2016/679 
                    du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes physiques 
                    à l&apos;égard du traitement des données à caractère personnel et à la libre circulation de ces données 
                    (« <strong>RGPD</strong> »).
                </p>
                <p>
                    Nous attirons votre attention sur le fait que nous pouvons être amenés à apporter des modifications 
                    à ce présent document notamment pour le conformer à toute nouvelle réglementation ou pour l&apos;adapter 
                    à nos pratiques.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 1 – Responsable du traitement</h2>
                <p>
                    Le responsable du traitement des données personnelles collectées sur le Site Cat Talks est l&apos;équipe 
                    de développement du projet, dans le cadre d&apos;un projet éducatif et de démonstration.
                </p>
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
                    Les données personnelles sont stockées dans une base de données MySQL hébergée par Clever Cloud SAS, 
                    société par actions simplifiée au capital de 22 952 €, immatriculée au RCS de Nantes sous le numéro 
                    B 524 172 699, dont le siège social est situé au 4 rue Voltaire, 44000 Nantes, France.
                </p>
                <p>
                    Pour plus d&apos;informations sur la politique de protection des données de Clever Cloud, 
                    consultez : <a href="https://www.clever.cloud/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.clever.cloud/privacy-policy/</a>
                </p>
            </section>

            <section className="page__section">
                <h2>Article 2 – Collecte de données à caractère personnel</h2>
                <p>
                    La notion de « donnée à caractère personnel » ou « donnée personnelle » désigne toute information 
                    relative à une personne physique identifiée ou identifiable.
                </p>
                <p>
                    Conformément au principe de minimisation, nous veillons à ne collecter que des données personnelles 
                    strictement nécessaires à la finalité des traitements mis en œuvre.
                </p>
                <p>
                    Lors de votre navigation sur le Site, et en fonction de vos actions, nous sommes susceptibles de 
                    collecter des données à caractère personnel vous concernant.
                </p>

                <h3>Action 1 : Lorsque vous naviguez sur le Site</h3>
                <p>
                    Les données personnelles collectées sont les suivantes : les données de navigation telles que 
                    l&apos;adresse IP et les indications en matière de communication qui sont mises à disposition du fait 
                    de l&apos;utilisation de votre ordinateur. Ces données sont collectées (i) soit automatiquement, 
                    (ii) soit après avoir recueilli votre consentement.
                </p>
                <p>
                    En outre, des données statistiques peuvent être recueillies lors de votre visite et être utilisées 
                    (nombre de pages vues, nombre de visites du site…). Pour plus d&apos;information sur les données 
                    statistiques, ou les données collectées dans le cadre de l&apos;utilisation de cookies, rendez-vous 
                    sur le bandeau cookie à disposition sur chaque page.
                </p>

                <h3>Action 2 : Lorsque vous créez un compte utilisateur</h3>
                <p>
                    Le Site vous permet de créer un compte utilisateur pour accéder à l&apos;application de chat. 
                    Pour créer votre compte, vous renseignez les informations suivantes : données d&apos;identification 
                    (<em>nom d&apos;utilisateur, pseudonyme</em>), données de connexion (<em>adresse email, mot de passe</em>).
                </p>
                <p>
                    Certaines données collectées ont un caractère nécessaire et sont signalées par un astérisque (*). 
                    Dans l&apos;hypothèse où vous refuseriez de communiquer lesdites données, votre demande ne pourra pas être traitée.
                </p>

                <h3>Action 3 : Lorsque vous utilisez le service de chat</h3>
                <p>
                    Lors de l&apos;utilisation du service de chat en temps réel, les données personnelles collectées sont 
                    les suivantes :
                </p>
                <ul>
                    <li>Les messages que vous échangez dans les salons de discussion (salles de chat)</li>
                    <li>Votre identifiant utilisateur et votre pseudonyme</li>
                    <li>Les informations relatives à votre participation aux différentes salles de discussion</li>
                    <li>Les données de connexion et de session (horodatage des connexions, durée de session)</li>
                </ul>
                <p>
                    Ces données sont nécessaires au bon fonctionnement du service de chat et à la communication en temps réel 
                    entre les utilisateurs.
                </p>

                <h3>Action 4 : Lorsque vous créez ou gérez des salles de discussion</h3>
                <p>
                    Si vous créez ou gérez des salles de discussion, les données personnelles collectées sont celles que vous 
                    fournissez directement, à savoir notamment : le nom de la salle, la description, les paramètres de visibilité, 
                    ainsi que votre identifiant en tant que créateur ou administrateur de la salle.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 3 – Finalités et bases légales du traitement</h2>
                <p>
                    Les données personnelles collectées sont traitées pour les finalités suivantes :
                </p>
                <ul>
                    <li>
                        <strong>Gestion de votre compte utilisateur :</strong> création, authentification, gestion de votre profil 
                        (base légale : exécution du contrat)
                    </li>
                    <li>
                        <strong>Fourniture du service de chat :</strong> transmission des messages en temps réel, gestion des salles 
                        de discussion, affichage des utilisateurs connectés (base légale : exécution du contrat)
                    </li>
                    <li>
                        <strong>Amélioration du service :</strong> analyse statistique de l&apos;utilisation du Site, 
                        optimisation des performances (base légale : intérêt légitime)
                    </li>
                    <li>
                        <strong>Respect des obligations légales :</strong> conservation des données pour répondre aux obligations 
                        légales et réglementaires (base légale : obligation légale)
                    </li>
                    <li>
                        <strong>Gestion des cookies :</strong> analyse de la navigation, personnalisation de l&apos;expérience 
                        utilisateur (base légale : consentement)
                    </li>
                </ul>
            </section>

            <section className="page__section">
                <h2>Article 4 – Destinataires et sous-traitants</h2>
                <p>
                    Vos données personnelles sont destinées aux personnes suivantes :
                </p>
                <ul>
                    <li>
                        <strong>L&apos;équipe de développement du projet Cat Talks</strong> : pour la gestion et la maintenance 
                        du Site et de l&apos;API
                    </li>
                    <li>
                        <strong>Les autres utilisateurs du service de chat</strong> : dans le cadre de l&apos;utilisation du 
                        service de chat, votre pseudonyme et vos messages sont visibles par les autres utilisateurs présents 
                        dans les mêmes salles de discussion
                    </li>
                </ul>
                <p>
                    <strong>Sous-traitants :</strong>
                </p>
                <ul>
                    <li>
                        <strong>Vercel Inc.</strong> : hébergement du Site frontend (transfert de données hors UE - États-Unis). 
                        Vercel est certifié conforme au Privacy Shield et applique des garanties appropriées pour la protection 
                        des données personnelles.
                    </li>
                    <li>
                        <strong>Render.com</strong> : hébergement de l&apos;API backend (transfert de données hors UE - États-Unis). 
                        Render.com applique des mesures de sécurité appropriées pour la protection des données.
                    </li>
                    <li>
                        <strong>Clever Cloud SAS</strong> : hébergement de la base de données MySQL contenant vos données personnelles. 
                        Clever Cloud SAS est une société française (RCS Nantes B 524 172 699) dont le siège social est situé au 
                        4 rue Voltaire, 44000 Nantes, France. Les données sont hébergées dans des centres de données sécurisés 
                        gérés par Clever Cloud. Pour plus d&apos;informations, consultez leur politique de protection des données : 
                        <a href="https://www.clever.cloud/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.clever.cloud/privacy-policy/</a>
                    </li>
                    <li>
                        <strong>Cookiebot</strong> : gestion du consentement aux cookies (si applicable). Les données sont traitées 
                        conformément à la politique de confidentialité de Cookiebot.
                    </li>
                </ul>
                <p>
                    Nous nous assurons que tous nos sous-traitants respectent la réglementation applicable en matière de protection 
                    des données personnelles et mettent en œuvre des garanties appropriées.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 5 – Durées de conservation de vos données personnelles</h2>
                <p>
                    Nous ne conservons vos données personnelles que pendant le temps nécessaire aux opérations pour lesquelles 
                    elles ont été collectées et dans le respect de la réglementation en vigueur.
                </p>
                <p>
                    De manière générale, en fonction de votre situation, les durées de conservation suivantes pourront s&apos;appliquer :
                </p>
                <ul>
                    <li>
                        <strong>Données relatives à l&apos;utilisation de cookies :</strong> Au maximum 25 mois, conformément 
                        aux durées de conservation des cookies définies dans notre politique cookies.
                    </li>
                    <li>
                        <strong>Données de compte utilisateur :</strong> Pendant toute la durée d&apos;utilisation de votre compte, 
                        et jusqu&apos;à 3 ans après la dernière connexion, sauf suppression de votre compte de votre part.
                    </li>
                    <li>
                        <strong>Messages de chat :</strong> Conservés pendant la durée de vie de la salle de discussion, 
                        sauf suppression explicite par un administrateur ou par vous-même. Les messages peuvent être supprimés 
                        à tout moment par les administrateurs des salles.
                    </li>
                    <li>
                        <strong>Données de navigation et statistiques :</strong> Conservées pour une durée maximale de 13 mois 
                        à compter de leur collecte.
                    </li>
                </ul>
                <p>
                    Certaines données pourront être conservées pour une durée supplémentaire pour la gestion de réclamations 
                    et/ou contentieux ainsi que pour répondre à nos obligations légales ou réglementaires ou encore pour répondre 
                    à des demandes d&apos;autorités habilitées. Ces données seront conservées en archivage intermédiaire et 
                    bénéficieront d&apos;un accès restreint à ces seules finalités.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 6 – Vos droits</h2>
                <p>
                    Conformément à la réglementation applicable en matière de protection des données personnelles, vous disposez 
                    des droits suivants concernant vos données personnelles :
                </p>
                <ul>
                    <li>
                        <strong>Droit d&apos;accès :</strong> Vous avez le droit d&apos;obtenir la confirmation que des données 
                        personnelles vous concernant sont ou ne sont pas traitées et, lorsqu&apos;elles le sont, d&apos;obtenir 
                        l&apos;accès auxdites données ainsi que certaines informations relatives au traitement.
                    </li>
                    <li>
                        <strong>Droit de rectification :</strong> Vous avez le droit d&apos;obtenir la rectification des données 
                        personnelles inexactes vous concernant. Vous avez également le droit de compléter des données personnelles 
                        incomplètes.
                    </li>
                    <li>
                        <strong>Droit à l&apos;effacement :</strong> Vous avez le droit d&apos;obtenir l&apos;effacement de vos données 
                        personnelles dans certains cas prévus par la réglementation.
                    </li>
                    <li>
                        <strong>Droit à la limitation du traitement :</strong> Vous avez le droit d&apos;obtenir la limitation 
                        du traitement de vos données personnelles dans certains cas.
                    </li>
                    <li>
                        <strong>Droit à la portabilité :</strong> Vous avez le droit de recevoir les données personnelles vous 
                        concernant que vous nous avez fournies, dans un format structuré, couramment utilisé et lisible par machine, 
                        et vous avez le droit de transmettre ces données à un autre responsable du traitement.
                    </li>
                    <li>
                        <strong>Droit d&apos;opposition :</strong> Vous avez le droit de vous opposer, pour des raisons tenant à 
                        votre situation particulière, au traitement de vos données personnelles fondé sur l&apos;intérêt légitime.
                    </li>
                    <li>
                        <strong>Droit de retirer votre consentement :</strong> Lorsque le traitement est fondé sur votre consentement, 
                        vous avez le droit de le retirer à tout moment, sans que cela n&apos;affecte la licéité du traitement 
                        effectué avant le retrait.
                    </li>
                    <li>
                        <strong>Droit de définir des directives relatives au sort de vos données après votre décès :</strong> 
                        Vous avez le droit de définir des directives relatives à la conservation, à l&apos;effacement et à la 
                        communication de vos données personnelles après votre décès.
                    </li>
                </ul>
                <p>
                    Pour exercer vos droits, vous pouvez nous contacter à l&apos;adresse email suivante : 
                    <strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a></strong>. 
                    Vous pouvez également nous contacter via l&apos;application de chat disponible sur le Site. 
                    Nous nous engageons à répondre à votre demande dans un délai d&apos;un mois à compter de la réception de votre demande.
                </p>
                <p>
                    Vous disposez également du droit d&apos;introduire une réclamation auprès de la Commission Nationale de 
                    l&apos;Informatique et des Libertés (CNIL) si vous estimez que le traitement de vos données personnelles 
                    constitue une violation de la réglementation applicable. Pour plus d&apos;informations, vous pouvez consulter 
                    le site de la CNIL : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 7 – Sécurité</h2>
                <p>
                    Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau 
                    de sécurité adapté au risque afin de protéger vos données personnelles contre la perte, l&apos;altération, 
                    la divulgation ou l&apos;accès non autorisé.
                </p>
                <p>
                    À ce titre, les précautions administratives, organisationnelles, techniques et physiques mises en œuvre ont 
                    pour but de protéger vos données à caractère personnel de la perte, du vol, d&apos;un accès non autorisé, 
                    d&apos;une transmission non autorisée, de toute modification ou destruction illégitime.
                </p>
                <p>
                    Les mesures et précautions mises en œuvre sont évaluées au regard de la nature des données personnelles traitées 
                    et des opérations de traitement entreprises.
                </p>
                <p>
                    Vos données personnelles collectées sont stockées de manière confidentielle et protégées à un niveau élevé de 
                    sécurité. Les serveurs où sont stockées vos données personnelles sont conformes aux normes de sécurité actuellement 
                    en vigueur. Ils sont protégés contre des attaques numériques et des attaques physiques.
                </p>
                <p>
                    L&apos;ensemble des communications entre votre navigateur et le Site sont sécurisées en HTTPS par l&apos;application 
                    de certificats TLS (dernières versions). Les communications avec l&apos;API backend sont également sécurisées 
                    via des connexions chiffrées.
                </p>
                <p>
                    Les mots de passe sont stockés de manière sécurisée en utilisant des techniques de hachage cryptographique 
                    (hashing) appropriées.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 8 – Cookies</h2>
                <p>
                    <strong>Qu&apos;est-ce qu&apos;un cookie ?</strong> Un cookie est un petit fichier texte enregistré depuis 
                    un espace dédié du disque dur de votre terminal (ordinateur, tablette, smartphone, etc.), à l&apos;occasion 
                    de la consultation d&apos;un service en ligne grâce à votre navigateur. Il permet à son éditeur d&apos;identifier 
                    le terminal dans lequel il est enregistré, pendant la durée de validité ou d&apos;enregistrement du cookie.
                </p>
                <p>
                    <strong>Comment peuvent-être utilisés les cookies sur le Site ?</strong> Le Site utilise des cookies ou 
                    technologies similaires pour les finalités définies au sein de notre solution de gestion du consentement 
                    (ou « <strong>CMP</strong> ») accessible depuis le bouton « Gérer vos préférences en matière de cookies » 
                    disponible en bas de chaque page du Site.
                </p>
                <p>
                    Certains de ces cookies sont nécessaires pour assurer le bon fonctionnement technique du Site. Ces cookies 
                    sont déposés automatiquement dès votre arrivée sur le Site et ne requièrent pas votre consentement.
                </p>
                <p>
                    Les autres cookies nous permettent (i) d&apos;améliorer votre expérience utilisateur, et (ii) d&apos;analyser 
                    le trafic, l&apos;audience et la performance de notre Site. Ils ne sont pas exemptés de consentement, et ne 
                    pourront être déposés qu&apos;après avoir recueilli votre consentement pour leur utilisation via notre CMP.
                </p>
                <p>
                    <strong>Comment utiliser notre CMP ?</strong> Lors de votre première visite sur le Site, notre CMP apparaît 
                    pour vous informer sur les différents cookies utilisés, leurs finalités, leurs fournisseurs et leur durée de 
                    validité / enregistrement sur votre terminal.
                </p>
                <p>
                    Notre CMP vous donne la possibilité :
                </p>
                <ul>
                    <li>D&apos;accepter l&apos;ensemble des cookies – « <em>OK pour moi</em> ».</li>
                    <li>De choisir les cookies qui peuvent être utilisés, finalité par finalité – « <em>Je choisis</em> ».</li>
                    <li>De refuser l&apos;utilisation de tous les cookies, à l&apos;exception des cookies nécessaires au bon 
                        fonctionnement du site – « <em>Non merci</em> ».</li>
                </ul>
                <p>
                    Une fois votre choix initial réalisé, la durée de ce choix sera conservée et appliquée pendant six (6) mois 
                    sur le Site.
                </p>
                <p>
                    Vous aurez la possibilité de modifier votre choix initial à tout moment en cliquant sur le bouton 
                    « Gérer vos préférences en matière de cookies » disponible en bas de chaque page du Site.
                </p>
                <p>
                    Vous pouvez également configurer votre navigateur Internet pour qu&apos;il bloque les cookies utilisés sur 
                    le Site ou vous alerte à leur sujet, mais certaines parties du Site risqueraient alors de ne pas fonctionner. 
                    Pour plus d&apos;informations sur la gestion des cookies, consultez notre <Link to="/politique-cookies">Politique Cookies</Link>.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 9 – Modifications apportées à la présente Politique</h2>
                <p>
                    Nous sommes susceptibles de modifier périodiquement cette Politique. En cas de modifications majeures apportées 
                    à la présente Politique, nous afficherons une notification de manière visible sur la page d&apos;accueil du Site. 
                    Nous vous invitons à consulter cette Politique régulièrement.
                </p>
                <p>
                    La date de dernière mise à jour de la présente Politique est indiquée en haut de ce document.
                </p>
            </section>

            <section className="page__section">
                <h2>Article 10 – Contact</h2>
                <p>
                    Pour toute question relative à la présente Politique de Protection des Données ou pour exercer vos droits, 
                    vous pouvez nous contacter à l&apos;adresse email suivante :
                </p>
                <p>
                    <strong>Email :</strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a>
                </p>
                <p>
                    <strong>Important :</strong> Cat Talks étant un site de démonstration à des fins éducatives, certaines fonctionnalités 
                    peuvent être limitées. Nous nous engageons à répondre à vos demandes dans les meilleurs délais.
                </p>
            </section>

            <footer className="page__footer">
                <p>
                    Cette politique de protection des données est fournie à titre informatif pour le site de démonstration Cat Talks. 
                    Pour toute question concernant cette politique ou l&apos;exercice de vos droits, veuillez nous contacter à l&apos;adresse 
                    <strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a></strong>.
                </p>
            </footer>
        </main>
    );
};

export default PrivacyPolicy;

