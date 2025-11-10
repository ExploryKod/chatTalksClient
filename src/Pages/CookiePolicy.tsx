import { Link } from "react-router-dom";

const CookiePolicy = () => {
    return (
        <main className="page page--legal">
            <Link to="/" className="page__back-button">
                Retour
            </Link>
            <header className="page__header">
                <h1>Politique Cookies</h1>
                <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            </header>

            <section className="page__section">
                <h2>1. Qu&apos;est-ce qu&apos;un Cookie ?</h2>
                <p>
                    Un cookie est un petit fichier texte enregistré depuis un espace dédié du disque dur de votre terminal 
                    (ordinateur, tablette, smartphone, etc.), à l&apos;occasion de la consultation d&apos;un service en ligne 
                    grâce à votre navigateur. Il permet à son éditeur d&apos;identifier le terminal dans lequel il est enregistré, 
                    pendant la durée de validité ou d&apos;enregistrement du cookie.
                </p>
                <p>
                    Le Site Cat Talks utilise également d&apos;autres technologies similaires aux cookies, telles que :
                </p>
                <ul>
                    <li><strong>Local Storage</strong> : stockage local de données dans votre navigateur pour améliorer 
                        l&apos;expérience utilisateur (par exemple, mémorisation de vos préférences de session)</li>
                    <li><strong>Session Storage</strong> : stockage temporaire de données pendant votre session de navigation</li>
                    <li><strong>Pixels de suivi</strong> : petits éléments invisibles utilisés pour analyser le trafic et 
                        l&apos;utilisation du Site</li>
                </ul>
                <p>
                    Ces technologies jouent un rôle essentiel dans l&apos;amélioration de votre expérience utilisateur sur le Site, 
                    notamment en permettant de maintenir votre session de connexion, de mémoriser vos préférences et d&apos;analyser 
                    l&apos;utilisation du service de chat.
                </p>
            </section>

            <section className="page__section">
                <h2>2. Gestion du Consentement</h2>
                <p>
                    Le Site Cat Talks utilise la solution <strong>Cookiebot</strong> pour gérer le consentement aux cookies. 
                    Cookiebot est un service tiers qui nous permet de respecter la réglementation en matière de cookies et de 
                    vous donner le contrôle sur les cookies utilisés sur le Site.
                </p>
                <p>
                    <strong>Lors de votre première visite sur le Site</strong>, un bandeau de consentement apparaît automatiquement 
                    pour vous informer sur les différents cookies utilisés, leurs finalités, leurs fournisseurs et leur durée de 
                    validité / enregistrement sur votre terminal.
                </p>
                <p>
                    <strong>Notre bandeau de consentement Cookiebot vous donne la possibilité :</strong>
                </p>
                <ul>
                    <li>D&apos;accepter l&apos;ensemble des cookies – « <em>OK pour moi</em> »</li>
                    <li>De choisir les cookies qui peuvent être utilisés, finalité par finalité – « <em>Je choisis</em> »</li>
                    <li>De refuser l&apos;utilisation de tous les cookies, à l&apos;exception des cookies nécessaires au bon 
                        fonctionnement du site – « <em>Non merci</em> »</li>
                </ul>
                <p>
                    <strong>Modification de vos préférences :</strong> Une fois votre choix initial réalisé, la durée de ce choix 
                    sera conservée et appliquée pendant <strong>six (6) mois</strong> sur le Site. Vous aurez la possibilité de 
                    modifier votre choix initial à tout moment en cliquant sur le bouton « Gérer vos préférences en matière de cookies » 
                    disponible en bas de chaque page du Site.
                </p>
                <p>
                    Pour plus d&apos;informations sur Cookiebot et leur politique de confidentialité, consultez : 
                    <a href="https://www.cookiebot.com/fr/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.cookiebot.com/fr/privacy-policy/</a>
                </p>
            </section>

            <section className="page__section">
                <h2>3. Catégories de Cookies</h2>
                <p>
                    Le Site Cat Talks utilise différentes catégories de cookies selon leurs finalités :
                </p>

                <h3>3.1. Cookies strictement nécessaires</h3>
                <p>
                    Ces cookies sont indispensables au bon fonctionnement technique du Site et ne peuvent pas être désactivés. 
                    Ils sont déposés automatiquement dès votre arrivée sur le Site et ne requièrent pas votre consentement.
                </p>
                <p>
                    <strong>Finalités :</strong>
                </p>
                <ul>
                    <li>Maintien de votre session de connexion</li>
                    <li>Authentification et sécurité de votre compte utilisateur</li>
                    <li>Fonctionnement du service de chat en temps réel (WebSocket)</li>
                    <li>Mémorisation de vos préférences de session</li>
                    <li>Gestion du consentement aux cookies (Cookiebot)</li>
                </ul>
                <p>
                    <strong>Durée de conservation :</strong> Ces cookies sont généralement supprimés à la fermeture de votre navigateur 
                    (cookies de session) ou conservés pour une durée limitée nécessaire à leur finalité.
                </p>

                <h3>3.2. Cookies de performance et d&apos;analyse</h3>
                <p>
                    Ces cookies nous permettent d&apos;analyser l&apos;utilisation du Site, de mesurer l&apos;audience et d&apos;optimiser 
                    les performances. Ils ne sont déposés qu&apos;après avoir recueilli votre consentement.
                </p>
                <p>
                    <strong>Finalités :</strong>
                </p>
                <ul>
                    <li>Analyse statistique de la fréquentation du Site</li>
                    <li>Mesure de la performance et de la vitesse de chargement des pages</li>
                    <li>Détection d&apos;anomalies techniques</li>
                    <li>Amélioration de l&apos;expérience utilisateur</li>
                </ul>
                <p>
                    <strong>Données collectées :</strong> La première moitié de votre adresse IP (anonymisée), la version de votre 
                    navigateur, votre système d&apos;exploitation, le type de terminal, l&apos;URL des pages visitées, un identifiant 
                    pseudonyme.
                </p>
                <p>
                    <strong>Durée de conservation :</strong> Au maximum 180 jours, conformément aux durées de conservation définies 
                    dans notre politique de protection des données.
                </p>

                <h3>3.3. Cookies de fonctionnalité</h3>
                <p>
                    Ces cookies permettent d&apos;améliorer la fonctionnalité et la personnalisation du Site. Ils ne sont déposés 
                    qu&apos;après avoir recueilli votre consentement.
                </p>
                <p>
                    <strong>Finalités :</strong>
                </p>
                <ul>
                    <li>Mémorisation de vos préférences d&apos;interface</li>
                    <li>Personnalisation de votre expérience de navigation</li>
                    <li>Amélioration de la fonctionnalité du service de chat</li>
                </ul>
                <p>
                    <strong>Durée de conservation :</strong> Variable selon le type de cookie, généralement jusqu&apos;à 13 mois 
                    maximum.
                </p>
            </section>

            <section className="page__section">
                <h2>4. Cookies Tiers</h2>
                <p>
                    Le Site Cat Talks utilise des services tiers qui peuvent déposer des cookies sur votre terminal :
                </p>

                <h3>4.1. Cookiebot</h3>
                <p>
                    <strong>Fournisseur :</strong> Cybot A/S, Havnegade 39, 1058 Copenhagen, Danemark<br />
                    <strong>Finalité :</strong> Gestion du consentement aux cookies<br />
                    <strong>Type de données :</strong> Préférences de consentement, identifiant unique<br />
                    <strong>Durée :</strong> 12 mois<br />
                    <strong>Politique de confidentialité :</strong> <a href="https://www.cookiebot.com/fr/privacy-policy/" target="_blank" rel="noopener noreferrer">https://www.cookiebot.com/fr/privacy-policy/</a>
                </p>

                <p>
                    <strong>Important :</strong> Actuellement, le Site Cat Talks n&apos;utilise pas de cookies marketing ou de 
                    cookies de réseaux sociaux. Si cela devait changer à l&apos;avenir, cette politique serait mise à jour 
                    en conséquence et vous en seriez informé.
                </p>
            </section>

            <section className="page__section">
                <h2>5. Paramétrage du Navigateur</h2>
                <p>
                    Vous pouvez configurer votre navigateur Internet pour qu&apos;il bloque les cookies utilisés sur le Site 
                    ou vous alerte à leur sujet. Cependant, certaines parties du Site risqueraient alors de ne pas fonctionner 
                    correctement, notamment :
                </p>
                <ul>
                    <li>La connexion à votre compte utilisateur</li>
                    <li>Le fonctionnement du service de chat en temps réel</li>
                    <li>La mémorisation de vos préférences</li>
                </ul>
                <p>
                    <strong>Comment configurer votre navigateur :</strong>
                </p>
                <ul>
                    <li><strong>Google Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies et autres données de sites</li>
                    <li><strong>Mozilla Firefox :</strong> Options → Vie privée et sécurité → Cookies et données de sites</li>
                    <li><strong>Microsoft Edge :</strong> Paramètres → Confidentialité, recherche et services → Cookies et autorisations de site</li>
                    <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies et données de sites web</li>
                    <li><strong>Opera :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                </ul>
                <p>
                    Vous pouvez également utiliser des extensions de navigateur qui bloquent les cookies tiers ou vous permettent 
                    de gérer plus finement les cookies acceptés.
                </p>
                <p>
                    <strong>Conséquences du blocage des cookies :</strong> Si vous choisissez de bloquer tous les cookies, certaines 
                    fonctionnalités du Site pourront être limitées ou indisponibles. Les cookies strictement nécessaires au fonctionnement 
                    du Site continueront d&apos;être utilisés pour garantir le bon fonctionnement du service de chat.
                </p>
            </section>

            <section className="page__section">
                <h2>6. Mises à Jour de la Politique Cookies</h2>
                <p>
                    La liste des cookies utilisés sur le Site est mise à jour automatiquement via Cookiebot. Cette politique de cookies 
                    peut être amendée à tout moment pour refléter les évolutions des technologies utilisées, des services proposés ou 
                    de la réglementation applicable.
                </p>
                <p>
                    En cas de modifications majeures apportées à la présente politique, nous afficherons une notification de manière 
                    visible sur la page d&apos;accueil du Site. Nous vous invitons à consulter cette politique régulièrement.
                </p>
                <p>
                    La date de dernière mise à jour de la présente politique est indiquée en haut de ce document.
                </p>
            </section>

            <section className="page__section">
                <h2>7. Vos Droits</h2>
                <p>
                    Conformément à la réglementation applicable, vous disposez de droits concernant les cookies et traceurs utilisés 
                    sur le Site :
                </p>
                <ul>
                    <li>Le droit de retirer votre consentement à tout moment</li>
                    <li>Le droit de refuser certains cookies (sauf ceux strictement nécessaires)</li>
                    <li>Le droit d&apos;être informé sur les cookies utilisés</li>
                    <li>Le droit de modifier vos préférences à tout moment</li>
                </ul>
                <p>
                    Pour exercer ces droits, vous pouvez :
                </p>
                <ul>
                    <li>Utiliser le bandeau de consentement Cookiebot disponible sur chaque page du Site</li>
                    <li>Cliquer sur le bouton « Gérer vos préférences en matière de cookies » en bas de chaque page</li>
                    <li>Configurer votre navigateur pour bloquer ou supprimer les cookies</li>
                    <li>Nous contacter à l&apos;adresse email suivante : <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a></li>
                </ul>
            </section>

            <footer className="page__footer">
                <p>
                    Pour toute question relative aux cookies utilisés sur le Site Cat Talks, vous pouvez nous contacter à l&apos;adresse 
                    <strong> <a href="mailto:cattalks@amaury-franssen-dev.com">cattalks@amaury-franssen-dev.com</a></strong>.
                </p>
                <p>
                    Pour plus d&apos;informations sur le traitement de vos données personnelles, consultez notre 
                    <Link to="/politique-de-confidentialite"> Politique de Protection des Données</Link>.
                </p>
            </footer>
        </main>
    );
};

export default CookiePolicy;

