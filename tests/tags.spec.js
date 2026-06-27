import {test,expect} from '@playwright/test'

test("test one @smoke",async()=>{
        console.log("test one executes successfully");
    })
    test("test two @smoke @sanity",async()=>{
        console.log("test two executes successfully");
    })
    test("test three @reg @smoke",async()=>{
        console.log("test three executes successfully");
    })
    test("test four @reg",async()=>{
        console.log("test four executes successfully");
    })
    test("test five @reg",async()=>{
        console.log("test five executes successfully");
    })

    