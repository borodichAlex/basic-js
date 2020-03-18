module.exports = function transform(arr) {

    if (!(Array.isArray(arr))) throw Error
    if (arr.length === 0) return arr

    // console.log(arr);

    // const controlSequences = {
    //     '--discard-next': function (index) {
    //         if (this[index + 1] === undefined) {
    //             this.splice(index, 1)
    //         } else {
    //             this.splice(index, 2)
    //         }

    //     },
    //     '--discard-prev': function (index) {
    //         // console.log(this)
    //         // console.log(`discard-prev:::`)
    //         // console.log('index: ' + index)
    //         if (this[index - 1] === undefined) {
    //             this.splice(index, 1)
    //         } else {
    //             this.splice((index - 1), 2)
    //             // index = 
    //             // this.splice((index), )
    //         }

    //         // console.log(this);
    //         // console.log('length: ' + transformed.length)

    //     },
    //     '--double-next': function (index) {
    //         // console.log(this)
    //         // console.log(`double-next:::`)
    //         // console.log('index: ' + index)
    //         if (this[index + 1] === undefined) {
    //             this.splice(index, 1)
    //         } else {
    //             if (this[index + 1] === '[object Object]') {
    //                 this.splice(index, 1, Object.assign({}, this[index + 1]))
    //             } else {
    //                 this.splice(index, 1, this[index + 1])
    //             }
    //         }
    //         // console.log(this);
    //         // console.log('length: ' + transformed.length)

    //     },
    //     '--double-prev': function (index) {
    //         // console.log(`double-prev:::`)
    //         // console.log('index: ' + index)
    //         if (this[index - 1] === undefined) {
    //             this.splice(index, 1)
    //         } else {
    //             // console.log(this[index])
    //             if (this[index - 1] === '[object Object]') {
    //                 this.splice(index, 1, Object.assign({}, this[index - 1]))
    //             } else {
    //                 this.splice(index, 1, this[index - 1])
    //             }
    //         }
    //         // console.log(this);
    //         // console.log('length: ' + transformed.length)

    //     },
    // };


    // transformed = arr.map((item, index, array) =>  )
    // transformed = arr.map((item, index, array) => {
    //     if (item in controlSequences) {
    //         controlSequences[item].call(transformed);
    //     }
    // })


    // start
    // const transformed = arr.concat();
    // console.log(transformed);

    // for (let i = 0; i < transformed.length; i++) {
    //     let item = transformed[i];
    //     console.log(item);
    //     console.log(i);

    //     switch (item) {
    //         case '--discard-next': {
    //             (transformed[i + 1] === undefined) ? (transformed.splice(i, 1), i = i - 1) : transformed.splice(i, 2), i = i - 1;
    //             break;
    //         }
    //         case '--discard-prev': {
    //             (i === 0) ? (transformed.splice(i, 1), i = i - 1) : transformed.splice((i - 1), 2), i = i - 2;
    //             break;
    //         }
    //         case '--double-next': {
    //             (transformed[i + 1] === undefined) ? (transformed.splice(i, 1), i = i - 1) :
    //                 (transformed[i + 1] === '[object Object]') ? (transformed.splice(i, 1, Object.assign({}, transformed[i + 1])), i = i - 1) :
    //                     (transformed.splice(i, 1, transformed[i + 1]), i = i - 1);
    //             break;
    //         }
    //         case '--double-prev': {
    //             (i === 0) ? (transformed.splice(i, 1), i = i - 1) :
    //                 (transformed[i - 1] === '[object Object]') ? (transformed.splice(i, 1, Object.assign({}, transformed[i - 1]))) :
    //                     (transformed.splice(i, 1, transformed[i - 1]));
    //             break;
    //         }
    //     }
    //     console.log(i);


    //     console.log(transformed);


    // }

    //end

    // transformed.forEach((item, index) => {
    //     console.log('array: ' + transformed)
    //     console.log('length: ' + transformed.length)
    //     console.log('index: ' + index)

    //     if (item in controlSequences) {
    //         controlSequences[item].call(transformed, index);
    //     } else {
    //         //    transformed.splice(index, 1, item)
    //     }
    // })
    // for (let item of arr) {
    //     if (item in controlSequences) {
    //         controlSequences[item].call(transformed);
    //         continue;
    //     }
    //     // transformed.push(item);
    // }
    // for (let item of arr) {
    //     if (item in controlSequences) {
    //         controlSequences[item].call(transformed);
    //         continue;
    //     }
    //     transformed.push(item);
    // }


    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
    }

    console.log({ transformed })
    console.log({ arr })
    return transformed;
};
