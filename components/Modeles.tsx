const modeles = [
  {
    title: "Évaluation des connaissances",
    text: "Vérifiez les acquis d'une formation avec des questions à choix multiples.",
  },
  {
    title: "Sondage de satisfaction",
    text: "Recueillez les retours des participants après un cours ou un atelier.",
  },
  {
    title: "Quiz de révision",
    text: "Aidez vos apprenants à réviser les notions clés à leur rythme.",
  },
];

export default function Modeles() {
  return (
    <section id="modeles">
      <div className="container">
        <div className="section-head">
          <h2>Modèles de questionnaires</h2>
          <p>Partez d'un modèle prêt à l'emploi et adaptez-le à vos besoins.</p>
        </div>
        <div className="cards">
          {modeles.map((modele, index) => (
            <div className="card" key={modele.title}>
              <div className="num">{String(index + 1).padStart(2, "0")}</div>
              <h3>{modele.title}</h3>
              <p>{modele.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
