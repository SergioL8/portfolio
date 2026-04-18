import { projects } from "../data/content";
import ProjectDetail from "../components/ProjectDetail";

const project = projects.find((p) => p.slug === "tiago");

const BASE = import.meta.env.BASE_URL;

export default function TiagoPage() {
  return (
    <ProjectDetail project={project}>
      {/* Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          This project consists of two controllers for the TiagoRobot in the
          Webots simulator. The first controller maps the environment and
          navigates a planned route. The second is more complex: the robot must
          recognize three jars, pick them up, and place them on a table using a
          combination of behavior trees, A* pathfinding, AI object recognition,
          and probabilistic mapping.
        </p>
      </section>

      {/* Behavior Trees */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Behavior Trees</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The robot's behavior is managed with a behavior tree &mdash; a plan
          of execution used across many fields of computer science. It consists
          of switching between a finite set of tasks in a modular way, allowing
          complex tasks to emerge from combining simple ones.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          The tree is organized into three blocks, each responsible for picking
          a jar and bringing it back to the table. The behaviors used are:{" "}
          <span className="text-sky-400">armPosition</span>,{" "}
          <span className="text-sky-400">gripper</span>,{" "}
          <span className="text-sky-400">cameraNavigation</span>,{" "}
          <span className="text-sky-400">planning</span>,{" "}
          <span className="text-sky-400">moveBack</span>,{" "}
          <span className="text-sky-400">navigation</span>, and{" "}
          <span className="text-sky-400">finish</span>. Each executes a simple
          action, but when properly combined they form the complex jar-pickup
          task.
        </p>
      </section>

      {/* A* Algorithm */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">A* Search Algorithm</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The A* search algorithm provides efficient pathfinding for route
          planning. Compared to Dijkstra's algorithm, A* focuses only on
          finding the shortest path from a specified source to a specified goal,
          making it faster by visiting fewer cells. This is one of the major
          features of the robot, enabling quick route planning multiple times
          during the behavior tree's execution.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <img
              src={`${BASE}images/tiago/resultOfAStarSimulation.png`}
              alt="Result of A* pathfinding algorithm"
              className="rounded-xl border border-slate-700 w-full"
            />
            <p className="text-slate-500 text-xs mt-2">
              A* algorithm result showing the computed path (green/red) from
              start to goal on the occupancy grid.
            </p>
          </div>
          <div className="flex items-center">
            <video
              controls
              className="rounded-xl border border-slate-700 w-full"
              preload="metadata"
            >
              <source
                src={`${BASE}images/tiago/simulationOfAStar.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <p className="text-slate-500 text-xs text-center">
          Video: Real-time visualization of the A* algorithm computing the
          optimal path.
        </p>
      </section>

      {/* AI Object Recognition */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">AI Object Recognition</h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The project uses AI to identify and grab objects. A Webots camera
          package with built-in object recognition identifies target jars and
          computes the distance from the camera. A controller then dynamically
          computes the position of each jar, allowing the robot to perfectly
          adjust its gripper and reliably pick up the jar.
        </p>

        <div className="flex justify-center">
          <video
            controls
            className="rounded-xl border border-slate-700 w-full max-w-2xl"
            preload="metadata"
          >
            <source
              src={`${BASE}images/tiago/grabbingJarsAISimulation.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="text-slate-500 text-xs text-center mt-2">
          Video: The robot using AI vision to identify, approach, and grab jars.
        </p>
      </section>

      {/* Probabilistic Mapping */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          Probabilistic Mapping & Navigation
        </h2>
        <p className="text-slate-300 leading-relaxed mb-4">
          The mapping system uses common industry techniques. Probabilistic
          mapping is central to the project since the lidar sensor can pick up
          noise &mdash; only objects that appear consistently for a minimum
          amount of time are considered valid.
        </p>
        <p className="text-slate-300 leading-relaxed mb-4">
          A key feature is the use of{" "}
          <span className="text-white font-medium">convolution</span> on the
          map: a convolution kernel grows every obstacle above a certain
          probability by the radius of the robot. This produces a "free space"
          area where the robot can move without risk of collision.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <img
              src={`${BASE}images/tiago/convolved_mapp.png`}
              alt="Convolved navigation map"
              className="rounded-xl border border-slate-700 w-full"
            />
            <p className="text-slate-500 text-xs mt-2">
              Convolved map: yellow represents free space (expanded obstacles
              ensure collision-free navigation), purple represents occupied or
              unreachable areas.
            </p>
          </div>
          <div className="flex items-center">
            <video
              controls
              className="rounded-xl border border-slate-700 w-full"
              preload="metadata"
            >
              <source
                src={`${BASE}images/tiago/mappingAndNavigationSimulation.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <p className="text-slate-500 text-xs text-center mt-2">
          Video: The robot mapping the environment and navigating the planned
          route.
        </p>
      </section>
    </ProjectDetail>
  );
}
