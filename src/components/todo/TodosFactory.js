import React from 'react'
import Todo from './Todo'

const TodosFactory = ({todosEndpoint}) => {

    const done = () => console.log('Done')

    const reject = () => console.log('Reject')

    const expand = () => console.log('Expand')

    //implement fetching info from todo endpoint. Now it's hardcoded values
    const fetchTodosInfo = (url) => {
        return [{
                title: 'aaaaaaaaaa aa',
                body: 'bsdfbsdfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf'
            },
            {
                title: 'sdfihiushdf u aa',
                body: 'sadfjausdfnasfou fousadf ousdahfouasdygfosgyf'
            },
            {
                title: 'kmsdiofj',
                body: 'kjadfauodfohaseufsdfjpiasd fsauphdfuhf sadfhsdjf aps fhuhs afh sdpiufhsafwipehf iashdf piusadhf'
            },
            {
                title: 'dfsvijhdsfv',
                body: 'bsdfbsdfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf'
            },
            {
                title: 'dvrgvrtb',
                body: 'bsdfbsdfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf'
            },
            {
                title: 'byuij7yhtbgfv',
                body: 'bsdfbsdfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf'
            },
            {
                title: 'pprtgoorpgpotrg',
                body: 'bsdfbsdfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf'
            },
            {
                title: 'popojgd riueoirfkm llk',
                body: 'bsdfbsdfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf'
            },
            {
                title: 'fdfsdftrg refrefr',
                body: `sdfsdfsdfrf reerf df bsdfbsdfd
                        sfbsrbsdfvsdfbsdfbsdfdsfbs
                        rbsdfvsdfbsdfbsdf
                        dsfbsrbsdfvsdfbsdfb
                        sdfdsfbsrbsdfvsdfbsdfbs
                        dfdsfbsrbsdfvsdf rdaf asf sadf
                        sdfsdfsdfrf reerf df bsdfbsdfd
                        sfbsrbsdfvsdfbsdfbsdfdsfbs
                        rbsdfvsdfbsdfbsdf
                        dsfbsrbsdfvsdfbsdfb
                        sdfdsfbsrbsdfvsdfbsdfbs
                        dfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf
                        asef afsfasdfsadfsadfsf
                        dupa dupa dupa dupa dupa dupa duap azard
                        sdfsdfsdf 
                        sdf sdf sdfsdfsdf sdf sdf sdf sdf `
            },
            {
                title: 'sdfjsjdfh ihdsiuhiu shf iui uh ihhhih',
                body: 'bsdfbsdfdsfbsrbsdfvsdf rdaf asf sadf asef afsfasdfsadfsadfsf'
            },
        ]
    }


    const createTodos = (todos) => todos
        .map((e, index) => 
            <Todo
                key={index}
                todoTitle={e.title}
                todoBody={e.body}
                done={done}
                expand={expand}
                reject={reject}
            />)

    const fetchResult = fetchTodosInfo(todosEndpoint)

    return createTodos(fetchResult)
}

export default TodosFactory