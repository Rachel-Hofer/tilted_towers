// const _Scout = window.Scout;

// class Scout {
//   static async init() {
//     await _Scout.configure({
//       clientId: 'af2ef8ea-a458-434e-8c00-26fb8f938eb1',
//       clientSecret: '10dcae04dca819ab4dd0505fa6dc8b923242bd61230c612a1eaf3377987a4a59',
//       scope: 'public.read'
//     });

//     var titles = await _Scout.titles.list();
//     var fortnite = titles.find(t => t.slug === 'fortnite');

//     _Scout.players.search('Ninja', 'epic', 'pc', fortnite.id, true, true)
//       .then((data) => {
//         var playerId = data.results[0].player.playerId;

//         _Scout.players.get(fortnite.id, playerId, 'p2.br.m0.weekly')
//           .then((data) => {
//             // Solo stats, current season.
//             console.log(JSON.stringify(data));
//           })
//           .catch((err) => {
//             console.log("ERROR", err);
//           })
//       })
//       .catch((err) => {
//         console.log("ERROR", err);
//       })
//   }
// }

// export default Scout;
