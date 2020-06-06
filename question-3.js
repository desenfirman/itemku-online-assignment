function solution(relation) {
    var answer = 0;
    const col_length = relation[0].length;

    // Initialize column range for checking phase + sorting column based on uniqueness (descending)
    let col_range = [];
    let col_count = [];
    let max_count = -1; 
    for (let i = 0; i < col_length; i++) {
        let element_set = {};
        relation.forEach(element => {
            let key = element[i].toLowerCase();
            if (typeof element_set[key] == 'undefined') {
                element_set[element[i]] = "";
            }
        });
        let count = Object.keys(element_set).length;
        if (count > max_count) {
            col_count.splice(0, 0, count);
            col_range.splice(0, 0, i);
            max_count = count;
        }else{
            let j = 0;
            while (count < col_count[j]) {
                j++;
            }
            col_count.splice(j, 0, count);
            col_range.splice(j, 0, i);
        }
    }

    /**
     * 
     * get count of distinct data within some range, col_range is column combination that checked
     * eg col_range = [1, 2], [0, 3], [0, 1, 2, 3], etc
     *  */ 
    var get_distinct_candidate_length = function (data, col_range) {
        let element_set = {};
        data.forEach(row => {
            let key = "";
            col_range.forEach(col => {
                key += ";" + row[col].toLowerCase();
            });
            if (typeof element_set[key] == 'undefined'){
                element_set[key] = "";
            }
        });
        return Object.keys(element_set).length;
    }
    
    
    var recursive_search_combination = function (n, src, proccessed, data, visited_col) {
        if (n == 0) {
            if (proccessed.length > 0) {
                /**
                 * if any element in processed contain in visited col, then we will not process it
                 * (because those element already match the minimality criteria)
                 *  */ 
                if ([...new Set(proccessed.concat(visited_col))].length != proccessed.concat(visited_col).length) {
                    return;
                }

                // get count of distinct element for specify processed column
                let count = get_distinct_candidate_length(data, proccessed);
                if (count >= data.length) {
                    // console.log(proccessed);
                    proccessed.forEach(el => {
                        // mark those column as visited
                        visited_col[visited_col.length] = el;
                    });
                    // increase the answer by 1
                    answer += 1;
                }
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            // array slicing until n = 0, eg [0, 1, 2, 3] splitted into = [1, 2, 3] [0].
            // for next iteration it will be [2, 3] [0, 1]
            recursive_search_combination(n - 1, src.slice(j + 1), proccessed.concat([src[j]]), data, visited_col);
        }
        return;
    }

    var visited_col = [];
    for (let i = 1; i < col_length; i++) {
        recursive_search_combination(i, col_range, [], relation, visited_col);
    }
    
    return answer;
}