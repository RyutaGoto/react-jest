import { PointManagement } from './PointManagement';

if('add 1', ()=>{
  const pointManagement = new PointManagement(100)
  expect(pointManagement.add(1)).toBe(101)
  expect(pointManagement.total).toBe(101)
})
