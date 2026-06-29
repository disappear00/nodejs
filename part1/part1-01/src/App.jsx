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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      {/* 一次性把三组数据传给 Content，只渲染一次 Content */}
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />
      <Total temp1={part1.exercises} temp2={part2.exercises} temp3={part3.exercises} />
    </div>
  )
}

export default App