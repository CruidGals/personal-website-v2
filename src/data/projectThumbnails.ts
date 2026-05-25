import mlLibraryScratch from '../assets/project_thumbnails/ml-library-scratch.png'
import rubiksCubeAgent from '../assets/project_thumbnails/rubiks-cube-agent.png'
import surviv from '../assets/project_thumbnails/surviv.png'
import tetrisDqn from '../assets/project_thumbnails/tetris-dqn.png'
import type { ProjectEntry } from './projects'

export const PROJECT_THUMBNAIL_BY_ID: Record<ProjectEntry['id'], string> = {
  surviv,
  'ml-library-scratch': mlLibraryScratch,
  'rubiks-cube': rubiksCubeAgent,
  'tetris-ai': tetrisDqn,
}
