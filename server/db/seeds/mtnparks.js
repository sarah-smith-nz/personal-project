exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('mtnparks').del()
    .then(function () {
      // Inserts seed entries
      return knex('mtnparks').insert([
        {
          id: 1,
          title: 'Woodhill Mountain Bike Park',
          description: "Auckland's Home Ground for Mountain Biking. Our newly built 50km+ network is NZ's most frequented and has something for every level of rider. We're 40 minutes from downtown Auckland, have 75+ hire bikes, an onsite mechanic service, proshop & small cafe.",
          conditions: 'Sandy soil means it drains well with rain and during winter. Can be dry and sandy during summer',
          lat: -36.73982772530113,
          lon: 174.4228348797747,
          image: '../images/Woodhilltrails.png',
          area: 'West',
          access: 'Restall Road, Woodhill, Auckland 0883. 15mins north of Kumeū',
          special: true,
          costs: true,
          club: false,
          website: 'https://www.bikeparks.co.nz/',
          difficulty: 3
        },
        {
          id: 2,
          title: 'Totara Mountain Bike Trails',
          description: 'Some of Auckland’s newest MTB trails, located just off the Manukau Motorway exit is it the perfect pace for a mid week spin.',
          conditions: 'Built for cross country these trails are mostly all weather. Single trails between bush and farmland.',
          lat: -36.990187020776084,
          lon: 174.90461423816748,
          image: '../images/Woodhilltrails.png',
          area: 'East',
          access: 'Redoubt Road, The Gardens, Auckland 2016. 5mins east of Westfield Manukau',
          special: true,
          costs: false,
          club: true,
          website: 'https://www.facebook.com/totaraparkmountainbikeclub/',
          difficulty: 2
        },
        {
          id: 3,
          title: '440 Mountain Bike Park',
          description: 'Boasting 440 meters in vertical height (its a monster for Auckland). Its by far the premium destination for mountain biking in the upper north island.',
          conditions: 'Downhill focus with paid shuttle options. Operates during the summer mainly on weekends',
          lat: -36.983030417380604,
          lon: 175.20307398863454,
          image: '../images/Woodhilltrails.png',
          area: 'South',
          access: '521 Kawakawa-Orere Road, Ōrere Point 2585. 25mins east from Clevedon',
          special: true,
          costs: true,
          club: false,
          website: 'https://www.fourfortymtbpark.co.nz/',
          difficulty: 4
        }
      ])
    })
}
