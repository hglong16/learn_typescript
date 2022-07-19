"use strict";
function delayedResponseWithCallback(callback) {
    function executeAfterTimeout() {
        console.log(`5. executeAfterTimeout()`);
        callback();
    }
    console.log(`2. calling setTimeout`);
    setTimeout(executeAfterTimeout, 1000);
    console.log(`3. after calling setTimeout`);
}
function callDelayAndWait() {
    function afterWait() {
        console.log(`6. afterWait()`);
    }
    console.log(`1. calling delayed ResponseWithCallback`);
    delayedResponseWithCallback(afterWait);
    console.log(`4. after calling delayedRedponseWithCallback`);
}
callDelayAndWait();
