const MissionCommander = require('./../app/missionCommander');

describe("unit test for missionCommander", () => {
    test('1) Create a mission commander objet', () => {
    const myMissionCommander = new MissionCommander("HootHoot")
    expect(myMissionCommander.name).toBe("HootHoot");
    });
  })
  