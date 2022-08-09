import { createStore } from 'vuex'

export default createStore({
  state: {
    Products:[
      {
          pr_id:1,
          title:'گوشی های هوشمند',
          product:[
  
              {
                  id:1,
                  name:'Samsung Galaxy S22',
                  price:40000000,
                  image:'S22.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
              {
                  id:2,
                  name:'Samsung Galaxy S21',
                  price:20000000,
                  image:'samsungs21.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
              {
                  id:3,
                  name:'Samsung Galaxy A52S',
                  price:12000000,
                  image:'a52s.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
          ]
  
      },
      {
          pr_id:2,
          title:'ساعت های هوشمند',
          product:[
              {
                  id:1,
                  name:'ساعت هوشمند شیائومی',
                  price:1000000,
                  image:'Xiaomi.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
              {
                  id:2,
                  name:'ساعت هوشمند سامسونگ',
                  price:10000000,
                  image:'Samsung-watch.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
  
          ]
      },
      {
          pr_id:3,
          title:'یخچال های ساید بای ساید',
          product:[
              {
                  id:1,
                  name:' یخچال ساید بای ساید ال جی',
                  price:100000000,
                  image:'lg-side.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
              {
                  id:2,
                  name:'یخچال ساید بای ساید سامسونگ',
                  price:120000000,
                  image:'Samsung-side.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
          ]
  
      },
      {
          pr_id:4,
          title:'تلویزیون',
          product:[
              {
                  id:1,
                  name:'تلویزیون ال ای دی سامسونگ',
                  price:50000000,
                  image:'samsungtv.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                   
              },
              {
                  id:2,
                  name:'تلویزیون ال جی',
                  price:60000000,
                  image:'lgtv.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
          ]
      },
      {
          pr_id:5,
          title:'لباسشویی',
          product:[
              {
                  id:8,
                  name:'لباسشویی ال جی',
                  price:15000000,
                  image:'lgwash.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
              {
                  id:9,
                  name:'لباسشویی سامسونگ',
                  price:20000000,
                  image:'samsunglebas.png',
                  description:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',                  
              },
          ]
      }
  ],

  },
  getters: {
    allProducts(state){
      return state.Products
    },
   getProductsById(state,id){
    return state.Products.product.find(pr=>pr.id==id)
   }
  
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
