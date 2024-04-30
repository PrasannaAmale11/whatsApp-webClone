
import { v } from 'convex/values';
import {query, mutation} from './_generated/server'

export const getProducts = query({
    args: {},
    handler: async (cts, args) => {
      const products =  await cts.db.query("products").collect()
      
      return products;
    }
})

export const addProduct = mutation({
    args: {
        name: v.string(),
        price: v.number(),
    },
    handler: async (cts, args) => {
    const productId =    await cts.db.insert("products", {name: args.name, price:args.price });
    return productId;
    }
})



export const deleteProduct = mutation({
    args:{
        id: v.id("products"),
    },
    handler: async (cts, args) => {
        await cts.db.delete(args.id)
    }
})