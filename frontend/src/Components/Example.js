import React,{useState,useEffect} from 'react';
import './Example.css';

function Example({examples}) {
  // var examples = {}
  const [ex,setEx] = useState({});

  const [example_arr,setArr] = useState([]);

 

//   useEffect(() => {
//     setArr([
//       {"LineNum":4,
//       "BuggyLine":"int i = 0",
//       "Examples":[
// `Eg #1 class-6 before: int n 
// Eg #1 class-6 after : int n ; 
// Eg #2 class-6 before: float area = 3.14159265 * 127 * 127 
// Eg #2 class-6 after : float area = 3.14159265 * 127 * 127 ; `,
// `Eg #1 class-110 before: int n , 
// Eg #1 class-110 after : int n ; 
// Eg #2 class-110 before: int i , 
// Eg #2 class-110 after : int i ;`
//         ],
//         "collapse":"demoCollapse1"
//       }
//     ])
//   },[])

  useEffect(() => {
    console.log("change");
    // examples = {
    //   "examples":{"5":[["int n \n","int n ; \n"],["float area = 3.14159265 * 127 * 127 \n","float area = 3.14159265 * 127 * 127 ; \n"],["int n , \n","int n ; \n"],["int i , \n","int i ; \n"]]},"errLines":["{'LineNum': 5, 'BuggyLine': ' int i', 'predClasses': [6, 110]}"]}
    
    // console.log("rrr",examples)  
    if(examples && examples != "examples" && examples["examples"]){
    
      var xy = examples["errLines"].map((element_item,item_count) =>{
        
        element_item = eval('('+element_item+')')
        // console.log(examples["examples"][element_item.LineNum])
        let classes = element_item.predClasses
        
        let data = examples["examples"][element_item.LineNum].map((example_item,count) => {
          let c = Math.floor(count/2)+1
          return `Eg #${c} class-${classes[c-1]} before: ${example_item[0]}Eg #${c} class-${classes[c-1]} after : ${example_item[1]}`
        })

        return {
          "LineNum": element_item.LineNum,
          "BuggyLine" :element_item.BuggyLine,
          "classes" : element_item.predClasses,
          "Examples":data,
          "collapse":"demoCollapse"+item_count
        }

      })
      console.log("rrr",xy)
      setArr(xy)

    }
    setEx(examples)
  },[examples])
  if(example_arr.length === 0 && !examples["errLines"]){
    return (
      <div className="Example">
        <div>{examples}</div>
      </div>
    );
  }
  else if(examples["errLines"].length === 0){
    return (
      <div className="Example">
        <div>No examples provided as there are no errors</div>
      </div>
    );
  }

  return (
    <div class="Example table-responsive">
      <table class="table table-hover table-striped table-bordered">
        <thead class="">
          <tr>
            <th scope="col">Line#</th>
            <th scope="col">Buggy line</th>
            <th scope="col">Examples</th>
            {/* <th scope="col">More</th> */}
          </tr>
        </thead>
        <tbody class="accordion" id="accordionExample">
          {example_arr.map((element,key) => {
            return <>
              <tr data-toggle="collapse" data-target={"#demoCollapse"+ key} key={key}>
                <th scope="row">{element.LineNum}</th>
                <td>{element.BuggyLine}</td>
                <td><ul>{element.Examples.map((item,key)=> <li key={key} className="lst-item"><pre>{item}</pre></li>)}</ul></td>
                {/* <td>+</td> */}
              </tr>
              <tr class="p">
                <td colspan="12" class="hiddenRow">
                  <div class="collapse p-3" id={"demoCollapse" + key} data-parent="#accordionExample">
                    {element.collapse}
                  </div> 
                </td> 
              </tr>
          </>})
          }
        </tbody>
      </table>
    </div>
  );

  
}

export default Example;