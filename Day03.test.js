const { TestScheduler } = require('jest');
const Problem = require('./Day03');

test("SimpleEvens test01", () => {

    let problem = new Problem();
    let expected = true;

    let actual = problem.simpleEvens(2222220222);

    expect(actual).toEqual(expected);
});

test("SimpleEvens test02", () => {

    let problem = new Problem();
    let expected = false;

    let actual = problem.simpleEvens(20864646452);

    expect(actual).toEqual(expected);
});

test("Our Test", () => {
    let problem = new Problem();
    let expected = true;
    let actual = problem.questionsMarks("arrb6???4xxbl5???eee5");
    expect(actual).toEqual(expected);
});


test("QuestionsMarks test01", () => {

    let problem = new Problem();
    let expected = false;

    let actual = problem.questionsMarks("aa6?9");

    expect(actual).toEqual(expected);
});

test("snakeCase test01", () => {

    let problem = new Problem();
    let expected = "cats_and_dogs_are_awesome";

    let actual = problem.snakeCase("cats AND*Dogs-are Awesome");

    expect(actual).toEqual(expected);
});

test("snakeCase test02", () => {

    let problem = new Problem();
    let expected = "a_b_c_d_e_f_g";

    let actual = problem.snakeCase("a b c d-e-f%g");

    expect(actual).toEqual(expected);
});

test("gcf test01", () => {

    let problem = new Problem();
    let expected = 1;

    let actual = problem.gcf([1, 6]);

    expect(actual).toEqual(expected);
});

test("gcf test02", () => {

    let problem = new Problem();
    let expected = 4;

    let actual = problem.gcf([12, 28]);

    expect(actual).toEqual(expected);
});