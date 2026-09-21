import { describe } from "node:test";
import { readjson ,list, writetask} from "./index";
import { expect, it, vi } from "vitest";
import { styleText } from "node:util";
import { readFile } from "node:fs/promises";
import type { data } from "./index";
describe('Testing : readjson ',()=>{
    it('File is Existing ',async ()=>{
        // const logSpy=vi.spyOn(console,"log").mockImplementation(()=>{})
        const data_arr=await readjson()
        // expect(logSpy).toHaveBeenCalledTimes(0)
        const actual_arr=await readFile("task_log.json","utf-8")
        expect(data_arr).toEqual(JSON.parse(actual_arr))
    })
    it('File is Not-Existing ',async ()=>{
        const logSpy=vi.spyOn(console,"log").mockImplementation(()=>{})
        await readjson(".new_file")
        expect(logSpy).toHaveBeenCalledWith(styleText(["bgBlue", "bold"],"File initialized.. Try adding some tasks.."))
    })
})

describe('Listing Function ',async ()=>{
    const names=await list()
    const data_arr=await readjson()
    if(!data_arr) return
    let curr_names=data_arr.map((data)=>data.name)
    expect(names).toEqual(curr_names)
})

describe('Write Task : writetask',async ()=>{
    const rawData = await readFile("./task_log.json","utf-8")
    let data_arr: Array<data>=JSON.parse(rawData)
    const newtask : data={
        name:"test",
        status:"Completed"
    }
    await writetask(newtask)
    data_arr.push(newtask)
    const new_arr=await readjson()
    if(!new_arr) return
    expect(new_arr).toEqual(data_arr)
})
