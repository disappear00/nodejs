const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

// 重构后的 Content 组件，内部渲染三个 Part
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} exercises={props.part1.exercises} />
      <Part part={props.part2.name} exercises={props.part2.exercises} />
      <Part part={props.part3.name} exercises={props.part3.exercises} />

    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.temp1 + props.temp2 + props.temp3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      {/* 一次性把三组数据传给 Content，只渲染一次 Content */}
      <Content
        part1={parts[0]}
        part2={parts[1]}
        part3={parts[2]}
      />
      <Total temp1={parts[0].exercises} temp2={parts[1].exercises} temp3={parts[2].exercises} />
    </div>
  )
}

export default App