
import { v } from 'convex/values';
import {query, mutation} from './_generated/server'

export const getTasks = query({
    args: {},
    handler: async (cts, args) => {
      const tasks =  await cts.db.query("tasks").collect()
      
      return tasks;
    }
})

export const addTask = mutation({
    args: {
        text: v.string(),
    },
    handler: async (cts, args) => {
    const taskId =    await cts.db.insert("tasks", {text: args.text, completed: false});
    return taskId;
    }
})

export const completeTask = mutation({
    args:{
        id: v.id("tasks"),
    },
    handler: async (cts, args) => {
        await cts.db.patch(args.id, {completed: true});
    }
});

export const deleteTask = mutation({
    args:{
        id: v.id("tasks"),
    },
    handler: async (cts, args) => {
        await cts.db.delete(args.id)
    }
})