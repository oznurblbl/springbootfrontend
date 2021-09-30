import React, {useState,useEffect,  Component} from 'react'
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import UserService from '../services/UserService';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


var didMount = false;

const columns = [
    {field: 'id', headerName: 'ID', width:  70 },
    {field: 'userName', headerName: 'Username', width : 130},
    {field: 'email', headerName: 'Email', width : 130},
    {field: 'roles',  headerName: 'Roles', width : 130}
]


const useStyles = makeStyles(theme => ({
    root: {
       
        table : {
            minWidth : 650,
        },

        '& .MuiDataGrid-root' : {
            height : 312,
        },

        '& .MuiPagination-ul' : {
            width : 348,
            margin : '0 auto',
        },

        '& .MuiDataGrid-footerContainer' : {
            display : 'none !important',
        },

        '& > *': {
            marginTop: theme.spacing(2),
            
        },
    },
}))

const Users = ()=> {
    const [state, setState] = useState({
        users : [],
        currentUser : null,
        currentIndex: -1,
        page: 1,
        pageSize:2,    
        filters: {value:"", columnField: ""},      
    })

// component ilk çağrıldığında çalışır
//   useEffect(() => {
//     retrieveUsers();
//   }, [])

  useEffect(() => {
      if((state.filters.value && state.filters.columnField) || state.page) {
          
        retrieveUsers();
    }
  
  }, [state.filters.value, state.filters.columnField, state.page])
  
function  getRequestParams(){

        //page: current page
        //count : total pages
        //pageSize : number of Items in each page
        const {page, pageSize, filters} = state;
        let params ={};

        if(page){
            params["page"] = page - 1;
        }

        if(pageSize){
            params["pageSize"] = pageSize;
        }
        
        if(filters.columnField && filters.value) {
            params["filters%5b" + state.filters.columnField + "%5d"] = state.filters.value
        }

        return params;
    }


 function   retrieveUsers(){
       
    const params =getRequestParams();

        UserService.getUsers(params).then((response) => {
            const {content, totalPages} = response;
            setState({
                ...state,
                users : content.map(user => { 
                    user.roles = user.roles.map(role => role.name).join(",");
                    return user; 
                }),
                count : totalPages,
            });
            console.log(response);
        })
        .catch((e) => {
            console.log(e);
        });

    }

  function  handleFilterChange(filter) {

        if (filter.filterModel.items.length) {
            const field = filter.filterModel.items[0].columnField;
            const value = filter.filterModel.items[0].value;

            if (!field || !field.length || !value || !value.length) {
                console.log('halay');
            } else {
               if(state.filters.columnField !== field && state.filters.value !== value) {
                setState({
                    ...state,
                    filters: {
                      value: value,
                      columnField: field
                    }
                  }); 
               }

            }
        }
    }


    function  handlePageChange(event,value){
     
        setState({
            ...state,
            page: value
        });

    }

    function handlePageSizeChange(event){
        setState({
            ...state,
                pageSize : event.target.value,
                page : 1
            }, () =>{
            retrieveUsers();
            }
            )
    }

    function setActiveUser(user, index) {
        setState({
        ...state,
                currentIndex : index,
                currentUser : state.users[index]
            });
    }

    function   onRowSelected(event){
            console.log(event);
    }


    const classes= useStyles();

       
      console.log(state)
        return (

        <div className="col-md-6">
           <div className = {classes.root} >
                <h1 className = 'text-center'>Users List</h1>
                
                <DataGrid 
            
                    components={{
                        Toolbar : GridToolbar,
                    }}
                    filterModel={{
                        items: [
                            {
                                columnField: state.filters.columnField,
                                operatorValue:'contains',
                                value: state.filters.value
                            }
                        ]
                    }}
                
                    filterMode="server"
                    onFilterModelChange={(model) => handleFilterChange(model)}
                    rows={state.users} 
                    columns={columns } 
                    pageSize={state.pageSize} 
                    checkboxSelection  
                    onRowSelected={onRowSelected}
                 />
                <Pagination  count={state.users.length} variant="outlined" color="secondary" onChange={handlePageChange} />
            </div>

           
        </div>
        );
}
export default Users