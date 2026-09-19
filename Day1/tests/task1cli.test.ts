import { describe } from "node:test";
import { parameterLogic } from "./function";
import { expect, it } from "vitest";

describe('Testing CLI Task1',()=>{
    it('Testing --version',()=>{
        const version=parameterLogic("--version")
        expect(version).toBe(process.version)
    })
    it('Testing --memory',()=>{
        const availableMemory=parameterLogic("--memory")
        expect(availableMemory).toBe(process.availableMemory())

    })
    it('Testing --dir',()=>{
        const pwd=parameterLogic("--dir")
        expect(pwd).toBe(process.cwd())
    })
    it('Testing --OS',()=>{
        const OS=parameterLogic("--OS")
        expect(OS).toBe(process.platform)
    })
    it('Testing --environment',()=>{
        const flag="production"===process.env.NODE_ENV
        if(flag){
            expect(parameterLogic("--environment")).toBe("Production mode")
        }
        else{
            expect(parameterLogic("--environment")).toBe("Development mode")
        }
    })
    it('Testing --unknown',()=>{
        expect(parameterLogic("--unknown")).toBe(undefined)
    })
})