import { NextPage } from 'next'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack, Flex } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Center
} from '@chakra-ui/react'
import { Input  } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useState } from 'react'
import { type } from 'os'
type cardType = {
  no:number, 
  name:string,
   roll:string,
   class:string,
   sec:string,
   year:string
}
export default function Home() {
    
  const [textData,setText] = useState<string>("")
  const [rollNo,setRolldata] = useState<string>("")
  const [classData,setClassName] = useState<string>("")
  const [section,setSectionData] = useState<string>("")
  const [admitYear,setYear] = useState<string>("")
  const [cards,setCardsData] = useState<cardType[]>([])
  const onCliker = ()=> {
    if( !(textData && rollNo && classData && section &&admitYear)){
    alert("Complete all fields ")
     return
     }
    let newCard : cardType ={
         no:cards.length+1,
         name:textData,
         roll:rollNo,
         class:classData,
        sec:section,
        year:admitYear
    }
    
    setCardsData([...cards,newCard])
    setText("")
    setRolldata("")
    setClassName("")
    setSectionData("")
    setYear("")
  }
  return (
    <Tabs variant='soft-rounded' colorScheme='teal' align='center' >
    <TabList style={{position:'sticky',top:'0',backgroundColor:'white'}}>
      <Tab>Details</Tab>
      <Tab>Input data</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        
        <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>NO.</Th>
        <Th>Student Name</Th>
        <Th>Roll no</Th>
        <Th>Section</Th>
        <Th>Class/Semester</Th>
        <Th>Batch No</Th>
      </Tr>
    </Thead>
    <Tbody>
      {cards.map((a : cardType) => {
        return(
          <>
          <Tr>
            <Td>{a.no}</Td>
            <Td>{a.name}</Td>
            <Td>{a.roll}</Td>
            <Td>{a.class}</Td>
            <Td>{a.sec}</Td>
            <Td>{a.year}</Td>
             </Tr>
          </>
        )
      }
      )
      }

    </Tbody>
  </Table>
</TableContainer>

      </TabPanel>
      <TabPanel>
       <Center>
        <Stack spacing={5}> 
        <Input value={textData} onChange={(e) => setText(e.target.value)} type='text' width='lg' variant='filled' placeholder='Student Name' />
        <Input value={rollNo} onChange={(e)=>setRolldata(e.target.value)} type='number' width='lg' variant='filled' placeholder='Roll no(in digit)' />
        <Input value={classData} onChange={(e)=>setClassName(e.target.value)} type='text' width='lg' variant='filled' placeholder='Class' />
        <Input value={section} onChange={(e) =>setSectionData(e.target.value)} type='text' width='lg' variant='filled' placeholder='Section' />
        <Input value={admitYear} onChange={(e)=>setYear(e.target.value)} type='number' width='lg' variant='filled' placeholder='Addmision  year (in digit)' />
          <Center><Button onClick={onCliker} colorScheme='teal' width='sm' >
           Add
          </Button>
        </Center>
    </Stack>
   </Center>
      </TabPanel>
    
    </TabPanels>
  </Tabs>
    
    )
}
