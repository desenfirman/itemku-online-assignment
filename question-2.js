function solution(N, users) {
    var answer = [];
    var user_length = users.length;
    var stages_completion_count = {};

    for (let i = 0; i < user_length; i++) {
        const user_stage = users[i];

        if (!(user_stage in stages_completion_count)) {
            stages_completion_count[user_stage] = 0;
        }
        stages_completion_count[user_stage] += 1;
    }

    var total_complete = user_length;
    for (let i = 1; i <= N; i++) {
        if (!(i in stages_completion_count)) {
            answer.push([i, 0]);
            continue;
        }
        answer.push([i, stages_completion_count[i]/total_complete]);
        total_complete -= stages_completion_count[i];
    }


    answer = answer.sort((a, b) => b[1] - a[1]);
    return answer.map((x) => {return x[0];});
}