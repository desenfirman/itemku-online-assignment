# Question 3

## Problem Statement

```text
A Candidate Key is an attribute or a set of attributes that can uniquely identify a tuple of a relation in the relational database and satisfies the following two properties.

- Uniqueness: The relation does not have two distinct tuples (i.e. rows or records in common database language) with the same values for these attributes.
- Minimality: There should no subset of these attributes satisfy uniqueness, which means if we exclude one of these attributes, then uniqueness will be broken.

[Student number, Name, Major, Grade]

[100,”ryan”,”music”,2]
[200,”apeach”,”math”,2]
[300,”tube”,”computer”,3]
[400,”con”,”computer”,4]
[500,”muzi”,”music”,3]
[600,”apeach”,”music”,2]

In the above example, each student has a unique "student number".
Thus, the ["student number"] can be the candidate key of the relation.

Then, because there are students who use the same name ("apeach") for "name", "name" can not be a candidate key.

However, if you use ["name", "major"] together, all the tuples of the relation can be uniquely identified, so they can become candidate keys.

Of course, it is possible to uniquely identify all tuples in a relation using ["name", "major", "grade"], but it can not be a candidate key because it does not satisfy the minimum.

Therefore, the candidate key of the input above is ["student number"], ["name", "major"].

Find how many candidate keys are there for given array relation.
```

## Answer Format

```javascript
function solution(relation) {
    var answer = 0;
    return answer;
}
```

## Limitations

```text
- relation is a two-dimensional string array.
- The length of the relation column is 1 ~ 8, and each column indicates the attribute of the relation.
- The length of the row of relation is 1 ~ 20, and each row represents a tuple of relations.
- The length of all strings in relation is 1 ~ 8, and consists of only lowercase letters and numbers.
- All tuples of relation are uniquely identifiable (ie, there are no duplicate tuples).
```

## Input and output examples

```text
relation: 
[[“100”,”ryan”,”music”,”2”],[“200”,”apeach”,”math”,”2”],[“300”,”tube”,”computer”,”3”],[“400”,”con”,”computer”,”4”],[“500”,”muzi”,”music”,”3”],[“600”,”apeach”,”music”,”2”]]

answer: 2
```
