

alert(
  "🎸 ROCK IN REELS 🎸\n\n" +
  "Roque teve a ideia de criar um festival de música pela internet!\n\n" +
  "Ele já tem a Jota Qwert confirmada e agora precisa convidar mais bandas, " +
  "buscar patrocínios e fazer esse sonho virar realidade.\n\n" +
  "Você vai decidir os rumos dessa história..."
);


alert(
  "🎤 FASE 01 - As Tias Fofinhas\n\n" +
  "Roque foi convidar as Tias Fofinhas (cover de Tears for Fears) " +
  "para o festival.\n\n" +
  "Mas elas têm uma exigência: 50 toalhas de crochê no camarim!\n\n" +
  "Detalhe: o evento é ONLINE. Não existe camarim. Nem verba para toalhas."
);

let fase01 = prompt(
  "O que Roque deve fazer?\n\n" +
  "Digite 1 - Falar a VERDADE\n" +
  "Digite 2 - MENTIR que tem camarim e toalhas"
);


fase01 = fase01 ? fase01.trim() : "";


if (fase01 === "1") {

  alert(
    "✅ FASE 02 - A Verdade Liberta!\n\n" +
    "Roque contou que o evento ainda está engatinhando e não tem camarins nem verba.\n\n" +
    "As Tias Fofinhas ficaram tristes, mas apreciaram a sinceridade! " +
    "Prometeram levar suas próprias toalhas e ainda passaram o contato de " +
    "Yasmina e os Manos, um grupo de rap muito talentoso."
  );

  let fase02 = prompt(
    "Yasmina quer ser marcada em TODAS as fotos de divulgação do evento.\n\n" +
    "O que Roque deve fazer?\n\n" +
    "Digite 1 - ACEITAR a exigência de Yasmina\n" +
    "Digite 2 - REJEITAR a proposta"
  );

  fase02 = fase02 ? fase02.trim() : "";

 
  if (fase02 === "1") {

    alert(
      "🚀 FASE 04 - O evento VIRALIZA!\n\n" +
      "Roque aceita e marca Yasmina e os Manos em tudo.\n\n" +
      "O efeito é assustadoramente bom! O evento viraliza, " +
      "patrocínios aparecem... e também uma banda desconhecida: o HORRÍVEL TRIO.\n\n" +
      "As músicas deles são muito relaxantes. Roque ficou receoso que " +
      "colocasse o público para dormir. 😴"
    );

    let fase04 = prompt(
      "Roque deve aceitar o Horrível Trio no festival?\n\n" +
      "Digite 1 - SIM, aceitar\n" +
      "Digite 2 - NÃO, rejeitar"
    );

    fase04 = fase04 ? fase04.trim() : "";

   
    if (fase04 === "1") {

      alert(
        "🎵 FASE 08 - Uma surpresa incrível!\n\n" +
        "O Horrível Trio foi um sucesso! Relaxante mas nunca tedioso, " +
        "músicos muito virtuosos!\n\n" +
        "Jeferson Bezerra, CEO da big tech Amazonia, é fã do HT e adorou o evento. " +
        "Ele quer reprisar o festival na nova rede social dele!\n\n" +
        "MAS... ele quer cortar Jota Qwert e Tias Fofinhas por medo de " +
        "problemas com direitos autorais das bandas cover."
      );

      let fase08 = prompt(
        "Roque deve aceitar a proposta da Amazonia?\n\n" +
        "Digite 1 - SIM, aceitar (e cortar as bandas cover)\n" +
        "Digite 2 - NÃO, manter todos e rejeitar a proposta"
      );

      fase08 = fase08 ? fase08.trim() : "";

      
      if (fase08 === "1") {
        alert(
          "❌ FASE 10 - CANCELAMENTO TOTAL!\n\n" +
          "Cortar as bandas originais causou uma onda de revolta nos fãs.\n\n" +
          "O festival sofreu um cancelamento gigantesco e nunca mais voltou a acontecer.\n\n" +
          "FIM. 💀"
        );

     
      } else if (fase08 === "2") {
        alert(
          "🏆 FASE 11 - O MELHOR FINAL!\n\n" +
          "Roque não virou as costas para quem esteve com ele desde o começo!\n\n" +
          "Jeferson Bezerra usou sua influência para liberar os direitos das músicas cover. " +
          "O festival foi veiculado completo e em shorts na nova rede social!\n\n" +
          "Tudo virou um grande sucesso e os contatos para uma nova edição já estão fervendo! 🎉\n\n" +
          "FIM. 🌟"
        );

      } else {
        alert("❓ Resposta inválida. Recarregue a página para jogar novamente!");
      }

    
    } else if (fase04 === "2") {
      alert(
        "😐 FASE 09 - Um evento sem brilho\n\n" +
        "Roque resolveu não arriscar e não incluiu o Horrível Trio.\n\n" +
        "O evento teve alguma relevância pelo alcance de Yasmina, " +
        "mas nunca decolou de verdade.\n\n" +
        "Na próxima edição, o Rock in Reels vai virar um festival de Rap... " +
        "mantendo o mesmo nome. 🎤\n\n" +
        "FIM."
      );

    } else {
      alert("❓ Resposta inválida. Recarregue a página para jogar novamente!");
    }

 
  } else if (fase02 === "2") {
    alert(
      "😔 FASE 05 - Uma chance perdida\n\n" +
      "Roque ficou receoso e rejeitou a proposta de Yasmina.\n\n" +
      "O Rock in Reels nunca viralizou. Duas boas bandas tocaram, " +
      "mas o evento nunca explodiu para o sucesso que poderia ter sido.\n\n" +
      "FIM."
    );

  } else {
    alert("❓ Resposta inválida. Recarregue a página para jogar novamente!");
  }


} else if (fase01 === "2") {

  alert(
    "😬 FASE 03 - A mentira tem pernas curtas...\n\n" +
    "Roque mentiu que tinha as toalhas. As Tias perguntaram a cor... " +
    "ele disse brancas. Elas disseram que precisavam ser PRETAS.\n\n" +
    "Ele se embolou todo, acabou confessando a mentira. " +
    "As Tias Fofinhas desistiram... e a Jota Qwert também saiu! 😱\n\n" +
    "Mas o pai de Roque, Lucio Fernando, oferece seu estúdio e dinheiro " +
    "para realizar o evento, mediante um contrato."
  );

  
  alert(
    "🌟 FASE EXTRA - O Dilema Interior\n\n" +
    "Antes de decidir sobre o contrato, Roque encontra seu melhor amigo, " +
    "o filósofo e músico Teodoro.\n\n" +
    "Teodoro diz: 'Cara, aceitar ajuda do teu pai não significa fraqueza. " +
    "Significa que você sabe trabalhar em equipe. Artistas independentes " +
    "também têm família!'\n\n" +
    "Roque ficou pensativo..."
  );

  let faseExtra = prompt(
    "Roque vai ouvir o conselho de Teodoro e reconsiderar?\n\n" +
    "Digite 1 - SIM, vai pensar com mais calma sobre o contrato\n" +
    "Digite 2 - NÃO, já decidiu e não precisa de conselho"
  );

  faseExtra = faseExtra ? faseExtra.trim() : "";

  if (faseExtra === "1") {
    alert(
      "💭 Roque respirou fundo e decidiu avaliar o contrato com mais cuidado...\n\n" +
      "Agora vem a decisão final!"
    );
  } else if (faseExtra === "2") {
    alert(
      "🤔 Roque agradeceu o amigo, mas disse que prefere decidir sozinho.\n\n" +
      "Ele segue em frente..."
    );
  }


  let fase03 = prompt(
    "Roque deve assinar o contrato com o pai?\n\n" +
    "Digite 1 - SIM, assinar o contrato\n" +
    "Digite 2 - NÃO, recusar"
  );

  fase03 = fase03 ? fase03.trim() : "";

 
  if (fase03 === "1") {
    alert(
      "💰 FASE 07 - Sucesso... de certo modo\n\n" +
      "Roque colocou o orgulho de lado e assinou o contrato.\n\n" +
      "Com o financiamento do pai, o festival foi um sucesso gigantesco... " +
      "porém somente no submundo da música.\n\n" +
      "FIM."
    );


  } else if (fase03 === "2") {
    alert(
      "🎵 FASE 06 - Perdão\n\n" +
      "Roque não assinou o contrato. Sem bandas, sem dinheiro, sem festival.\n\n" +
      "Ele fez um mini show com sua banda, a Roda de Roque, e durante os preparativos " +
      "compôs uma música sobre a mentira que tinha contado. O refrão repetia 'Perdão' sem parar.\n\n" +
      "As Tias Fofinhas assistiram, se emocionaram e o perdoaram! " +
      "Prometeram tocar no Rock in Reels se ele quiser retomar o projeto. 🎶\n\n" +
      "FIM."
    );

  } else {
    alert("❓ Resposta inválida. Recarregue a página para jogar novamente!");
  }

} else {
  alert("❓ Resposta inválida. Recarregue a página para jogar novamente!");
}