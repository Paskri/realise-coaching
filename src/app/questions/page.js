import Collapse from '@/components/Collapse'
import React from 'react'
import './questions.css'
import Banner from '@/components/Banner/Banner'
import Offset from '@/components/Offset'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: "Questions fréquentes - REALISE Coaching",
  description: "Trouvez les réponses aux questions les plus fréquentes sur les coachings proposés par REALISE Coaching. Si vous avez d'autres interrogations, contactez-nous directement.",
  keywords: [
    "FAQ coaching",
    "questions coaching",
    "REALISE Coaching",
    "coaching entreprise",
    "coaching personnel",
    "coaching scolaire",
    "accompagnement professionnel",
    "coaching orientation scolaire",
    "coaching adolescent",
    "coaching développement personnel"
  ],
  metadataBase: new URL('https://realise-coaching.fr'),
  twitter: {
    card: 'summary',
    title: 'Questions fréquentes | Realise Coaching',
    description: "Découvrez les réponses aux questions les plus fréquentes concernant les coachings individuels, professionnels, scolaires et plus. Si vous avez d'autres questions, contactez-nous.",
    creator: '@luciecalvayrac',
    images: '/images/og/barque-og.webp',
  },
  openGraph: {
    title: "Questions fréquentes | REALISE Coaching",
    description: "Découvrez les réponses aux questions les plus fréquentes concernant les coachings individuels, professionnels, scolaires et plus. Si vous avez d'autres questions, contactez-nous.",
    url: "https://www.realise-coaching.fr/questions",
    type: "website",
    images: [
      {
        url: "/images/og/children-og.webp",
        width: 1200,
        height: 630,
        alt: "FAQ | REALISE Coaching"
      },
    ],
  },
};

export default function Questions() {
  return (
    <>
      <header>
        <NavBar />
        <Offset />
        <Banner
          src="children"
          title="Questions"
          subtitle="Les réponses aux interrogations les plus courantes"
          alt="Enfants qui jouent dans un pré"
        />
      </header>
      <main>
        <div className="about">
          <p className='margin-fix'>Veuillez trouver ci-dessous une selection des questions les plus fréquemment posées autour de la question des coachings que je propose.</p>
          <p className='question-intro'>Si vous ne trouvez pas la réponse que vous cherchez, n’hésitez pas à prendre contact. Je serais ravie de pouvoir vous apporter toutes les réponses dont vous avez besoin.</p>
          <Collapse
            size="large"
            title="Quelle est la différence entre une prestation de coaching et  un accompagnement avec des conseils ? "
            content="<p>Lors d’un coaching, c’est vous qui faites émerger des solutions.</p>
          <p>Le coach vous guide dans votre réflexion, à travers des exercices, des questionnements, des prises de conscience; il n’énonce pas de solutions.</p>
          <p>Forte de plus de 2 000 recrutements réalisés dans tout secteurs d’activités soit près de 80 000 candidats interviewés , je pourrai vous conseiller dans votre recherche d’emploi ou de stage, ou aborder de façon éclairée les caractéristiques et attendus de différents métiers.</p>
          "
          />

          <Collapse
            size="large"
            title="Quels sont les signes qui vous indiquent que vous avez besoin de faire un coaching ?"
            content="<p>Vous êtes conscient d’un dysfonctionnement ou d’un déséquilibre dans votre vie professionnelle et/ou personnelle mais nous n’arrivez pas l’identifier, à le nommer.</p>
          <p>Vous avez envie d’avancer, de changer, de retrouver une sérénité, un apaisement mais vous ne savez pas par quoi commencer.
          vous avez besoin d’être guidé, accompagné.</p>"
          />

          <Collapse
            size="large"
            title="Quels types de techniques de coaching sont utilisés dans le coaching professionnel ?"
            content="<p>Selon les besoins et les objectifs de l’individu ou de l’entreprise, diverses stratégies de coaching d’entreprise peuvent être utilisées :
          En 8 étapes , le coach travaille sur les valeurs, les croyances (les croyances aidantes et les croyances limitantes),  les besoins,  et les peurs,  les limites  ( limites aidantes et limites limitantes),
        </p>
        <ul>
          <li>Questionnement Vertical : Utilisé pour clarifier les objectifs, identifier les obstacles et trouver des solutions.</li>

          <li>Écoute active : Le coach adopte une attitude bienveillante et une écoute active où la reformulation est la clés d’une communication réussie et favorise des prises de consciences.</li>
          <li>Exercices écrits pendant ou entre les séances:  la Roue des Valeurs  (Frédéric HUDSON), les Domaines de vie (toujours selon Hudson), la boucle auto-validante,…</li>

          <li>Des exercices de visualisation, des techniques de relaxation, et de gestion de la peur et de de ses émotions (l’Ancrage , exercice de PNL),  les positions  de perception( PNL)..</li>

          <li>Fixation d’objectifs : Aide à créer des objectifs SMART (Spécifiques, Mesurables, Atteignables, Pertinents et limités dans le Temps) pour maintenir la motivation.</li>

          <li>Responsabilité du coach et du coaché : Aide à rester responsable de ses engagements en suivant les progrès et en offrant encouragements et soutien.</li>
        </ul>"
          />

          <Collapse
            size="large"
            title="Quelle est la durée d’un programme de coaching professionnel typique et quel est l’engagement en termes de temps ?"
            content="<p>Un accompagnement en coaching est estimé entre 8 et 10 séances. Les séances sont idéalement espacées de 8 à 10 jours. Comptez donc entre 2 et 3 mois pour réaliser votre coaching.
          Les séances peuvent avoir lieu en présentiel ou en visio.</p>"
          />

          <Collapse
            size="large"
            title="Qu'est-ce qu'un coaching peut vous apporter ?"
            content="<p>Le but du coaching est d’amener le client à concrétiser des changements dans sa vie. Il l’amène à observer sa propre situation sous d’autres angles et à ouvrir les yeux sur des solutions qu’il n’aurait pas été capable d’envisager tout seul.
          Les prises de consciences sont nombreuses et rapides.</p>
          <p>le coach est garant du processus de coaching, mais c’est au coaché de mettre en place les changements définis en séance.
          Le coaching permet au client de structurer ses pensées pour être capable d’avancer dans sa vie !</p>"
          />

          <Collapse
            size="large"
            title="Comment sait-on que le coaching est terminé ?"
            content="<p>Lors de la dernière séance vous établirez la liste des actions à mener pour réaliser l’objectif que vous aurez défini.
          Votre coaching s’achève donc avec des actions concrètes à mener.</p>"
          />
          <Collapse
            size="large"
            title="Comment se passe le premier RDV ?"
            content="
            <p>Vous me contactez par mail ou par téléphone ou via le formulaire en ligne, ou prenez directement RDV en ligne sur mon agenda partagé Calendly.</p>
            <p>Je vous répondrai rapidement pour vous proposer ou vous confirmer une première prise de contact par téléphone.</p>
            <p>L’ors d’un premier contact téléphonique ou en visio d’environ 30 minutes vous m’exposerez vos attentes et vos problématiques. Je répondrai également à toutes vos questions.</p>
            <p>Pour le Coaching d’Orientation Scolaire, le premier RDV se fait toujours en présence d’au moins 1 parent et du jeune.</p>
            <p>Nous déciderons ensemble d’un plan d’actions adapté et si vous avez été à l’aise et que vous estimez que vous pourrez trouver à mes côtés une solution à votre situation, nous planifierons  première séance.</p>"
          />
        </div>

      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Comment se déroule un coaching ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Lors d'un coaching, c’est vous qui faites émerger des solutions. Le coach vous guide dans votre réflexion à travers des exercices, des questionnements, et des prises de conscience. Le coach n’énonce pas de solutions.",
                },
              },
              {
                "@type": "Question",
                name: "Combien de séances sont nécessaires pour un coaching ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Un accompagnement en coaching est généralement estimé entre 8 et 10 séances. Les séances sont idéalement espacées de 8 à 10 jours. Le coaching dure donc entre 2 et 3 mois, avec la possibilité de le réaliser en présentiel ou en visio.",
                },
              },
              {
                "@type": "Question",
                name: "Comment prendre contact pour un coaching ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Vous pouvez me contacter par mail, téléphone, ou via le formulaire en ligne. Il est également possible de prendre rendez-vous directement via mon agenda partagé sur Calendly. Un premier contact téléphonique ou en visio vous permettra de discuter de vos attentes et de vos problématiques.",
                },
              },
              {
                "@type": "Question",
                name: "Qu'est-ce que le coaching d'orientation scolaire ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le coaching d'orientation scolaire est destiné aux jeunes qui ont besoin d'être accompagnés dans leur parcours scolaire, notamment pour choisir leur orientation et réussir leur passage vers le supérieur, comme dans le cadre de la plateforme Parcoursup.",
                },
              },
            ],
          }),
        }}
      />

    </>
  )
}
