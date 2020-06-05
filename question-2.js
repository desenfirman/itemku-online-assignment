function solution(N, users) {
    var answer = [];
    var user_length = users.length;

    // collecting frequency data using reducer O(user_length)
    frequency = users.reduce((frequency, el) => {
        if (typeof frequency[el] == 'undefined') {
            frequency[el] = 0;
        }
        frequency[el] += 1;

        return frequency;
    }, {});

    var fr_data = []
    var total_complete = user_length;
    
    // map possibilites for each stage O(stage_length)
    for (let i = 1; i <= N; i++) {

        // if stage is not available in frequency data, 
        // then the possibilites are all user clear those stages
        // so the failure rate is 0 
        if (typeof frequency[i] == 'undefined') {
            answer.push(i);
            fr_data.push(0);

            continue;
        }
        let fr = frequency[i] / total_complete; // fr = failure_rate

        // condition for first element (i == 1 or while fr_data is empty)
        if (fr_data.length == 0) {
            answer.push(i);
            fr_data.push(fr);
            total_complete -= frequency[i];

            continue;
        }

        let j = fr_data.length - 1;
        let curr_min_fr = fr_data[j];

        // Performing insertion-sort-based checking while inserting stages_data in answer
        // decreasing j value until we found that fr for stage i is lower than fr in fr_data
        while (fr > curr_min_fr && j > 0){
            j--;
            curr_min_fr = fr_data[j];
        }

        // for some condition fr is same as fr_data in index j.
        // so, we need to put i (stage) after fr_data index j (since i (stage) is always increasing in each iteration).
        // so it will automatically sorted ascending based stage level
        if (fr_data[j] == fr) {
            j++;
        }

        // console.log("inserting ", i, "with fr", fr , "at ", j)
        answer.splice(j, 0, i);
        fr_data.splice(j, 0, fr);

        total_complete -= frequency[i];
        // console.log("stages_data", answer, fr_data);

    }

    return answer;
}