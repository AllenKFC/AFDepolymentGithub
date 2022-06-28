module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.num1 && req.query.num2) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: req.query.num1 * req.query.num2
        };
    } else {
        context.res = {
            status: 400,
            body: "Pass two numbers (num1 & num2) as query parameters."
        };
    }
    
}