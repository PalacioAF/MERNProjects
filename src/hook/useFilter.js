import React,{useState,useRef} from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { Input,Button} from 'antd'

export const useFilter = () => {
    const [search,setSearch]=useState({
        searchText: ''
    });
    const searchInput = useRef(null);

    const getColumnSearchProps = (data,dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
            <Input
            ref={ searchInput }
            placeholder={`Buscar ${data}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
            >
            Buscar
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Limpiar
            </Button>
        </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
        record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
        if (visible) {
            setTimeout(() => searchInput.current.select())
        }
        },
        render: text => {
            return (text)
        }
    })

    const handleSearch = (selectedKeys, confirm) => {
        confirm()
        setSearch({ searchText: selectedKeys[0] })
        console.log(search)
    }

    const handleReset = clearFilters => {
        clearFilters()
        setSearch({ searchText: '' })
    }

    return {getColumnSearchProps };
}
 