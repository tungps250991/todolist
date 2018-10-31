var randomID = require("random-id");

const TasksData = [
    {
        id: randomID(5, "aA0"),
        name: "Soáº¡n ReactJS",
        labelArr: ["Frontend", "Backend"],
        priority: 1,
        memberIDArr: ["user_2"],
        status: 2,
        description: "Pháº£i soáº¡n ReactJS kĂ¨m vá»›i NodeJS vĂ  Redux"
    },
    {
        id: randomID(5, "aA0"),
        name: "Dáº¡y AngularJS",
        labelArr: ["Frontend", "API"],
        priority: 2,
        memberIDArr: ["user_4", "user_5"],
        status: 1,
        description: "Ná»™i dung cá»§a Angular ráº¥t dĂ i vĂ  khĂ³"
    },
    {
        id: randomID(5, "aA0"),
        name: "Soáº¡n Python",
        labelArr: ["Backend"],
        priority: 2,
        memberIDArr: ["user_3", "user_5"],
        status: 1,
        description: "Soáº¡n python pháº£i táº­p trung vĂ o game vĂ  giáº£i quyáº¿t váº¥n Ä‘á»"
    },
    {
        id: randomID(5, "aA0"),
        name: "Thi Hackathon",
        labelArr: ["Frontend", "Backend", "Issue"],
        priority: 3,
        memberIDArr: ["user_2", "user_3", "user_4", "user_5"],
        status: 3,
        description: "Cuá»™c thi Ä‘Ă²i há»i tÆ° duy vĂ  ká»¹ nÄƒng coding"
    },
]

export default TasksData;