const Item = ({ item }: any) => {
     return (
          <div>
               <li key={item.id} >
                    <div className="bg-ft-Gray-3 rounded-md p-2 my-5">
                         <h3 className="text-ft-Gray-4 font-semibold text-xl pl-2">{item.title}</h3>
                    </div>
                    <div className="bg-ft-Gray-2 rounded-md p-2">
                         <p className="text-ft-Gray-4 font-light text-lg ">{item.body}</p>
                    </div>
               </li>
          </div>
     )
}

export default Item
