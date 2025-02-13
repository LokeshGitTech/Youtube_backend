const asyncHandler = (requestHandler) => {
    (res, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next).
        catch((err)=>(err))

    }
}

export {asyncHandler};




// using asyncHandler try catch block

// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message || "Something went wrong"
//         })
//     }
// }