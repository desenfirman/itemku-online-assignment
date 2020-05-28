function solution(relation) {
    var answer = 0;
    const col_length = relation[0].length;
    const row_length = relation.length;

    col_idx = 0;
    n_col_used = 1;

    while (true) {
        var element_set = {};
        for (let i = 0; i < row_length; i++) {
            var key_str = "";
            for (let j = col_idx; j < col_idx+n_col_used; j++) {
                key_str += ";" + relation[i][j];
            }
            if (!(key_str in element_set)) {
                element_set[key_str] = [];
            }
        }
        var uniqueness_count = Object.keys(element_set).length;
        if (uniqueness_count >= row_length) {
            answer += 1;
            col_idx += n_col_used;
            n_col_used = 1;
        }
        else{
            n_col_used += 1;
            if (col_idx+n_col_used >= col_length) {
                break;
            }
        }
    }
    return answer;
}