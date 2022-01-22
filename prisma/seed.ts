import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

function getPosts() {
  return [
    {
      slug: "lorem-markdownum",
      title: "Lorem markdownum",
      content: `# Curetas albis nulla operis

      ## Luebat deus
      
      Lorem markdownum, sibi laetos caluere alterius palearia vocassent terrarum
      reget? Vobis vires est: et suis cum mentem dixerat pariter sermonibus. Suis vix
      de fecundaque totusque vestro Calydona spernite puellae, placet petentem
      [debebunt nigrae](http://nova-quoque.net/cum) Niobe non. Dum animi fragor virtus
      Ortygiam. Ora non qua velit, omnia protinus [primaque percusso
      natasque](http://www.ferarum.org/mihi-ducit) nasci mite animam bracchia cursu,
      loricaeque!`,
    },
    {
      slug: "this-is-a-test-post-do-not-delete!",
      title: "This is a test post do not delete!",
      content: `# Tester post

      ## Trying things out
      
      Spem dubiam videt imagine saniemque capillis in pectora est nurusque res more
      fit si. Est defendere transire, suorum nolis te dum redeuntis: [arcebat
      undas](http://longos.org/), sucis sed. Concidit latura tenendae. Nil suos ipse.
      Posuere ne vultu, quaecumque ponto perstant stridet postquam remis ac quarum
      vertitur Terea umbra concordes Thisbe.`,
    },
  ];
}

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.posts.create({ data: post });
    })
  );
}

seed();
