module.exports = function(robot) {

  // const emojis = [
  //   ':zero:',
  //   ':one:',
  //   ':two:',
  //   ':three:',
  //   ':four:',
  //   ':five:',
  //   ':six:',
  //   ':seven:',
  //   ':eight:',
  //   ':nine:',
  //   ':ten:'
  // ];

  // let options = [];

  let pod = "Processo de Oferta de Disciplina";
  pod = pod.link("https://www.youtube.com/watch?v=VpBFySaAl6A");

  let ct = "Criação de Turmas";
  ct = ct.link("https://www.youtube.com/watch?v=FwxPa7knxGI");

  let cah = "Criação/Ajuste de Horário";
  cah = cah.link("https://www.youtube.com/watch?v=WR9LN6JYLT0");

  let tod = "Tramitar Oferta de Disciplina";
  tod = tod.link("https://www.youtube.com/watch?v=tGoJavMVwdc");

  let ad = "Adicionar Docentes";
  ad = ad.link("https://www.youtube.com/watch?v=Lg7KNEpJZiQ");

  // options.push(emojis[(options.length + 1)] + ' ' + pod);
  // options.push(emojis[(options.length + 1)] + ' ' + ct);
  // options.push(emojis[(options.length + 1)] + ' ' + cah);
  // options.push(emojis[(options.length + 1)] + ' ' + tod);
  // options.push(emojis[(options.length + 1)] + ' ' + ad);

  robot.hear(/!oferta/i, function(msg) {
    msg.send(pod + "\n" + ct + "\n" + cah + "\n" + tod + "\n" + ad + "\n");
  });
};
