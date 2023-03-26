import styled from "@emotion/styled";

export const NavbarStyled = styled.div`
.menu{
    cursor: pointer;
}
padding: 15px 0;

.logo{
    width: 110px;
}
.search_box{
    display: flex;
    justify-content: space-between;
    border: 1px solid #cccccc;
    border-radius: 12px;
    margin-right: 30px;
    padding: 3px 3px 3px 5px;
    width: 400px;
    .search{
        input{
            font-size: 20px;
                border: 0;
                width: 360px;
                outline: 0;
            }
        }
        .icon{
            cursor: pointer;
        }
    }
    
    @media screen and (min-width:480px){
        .menu{
            font-size: 25px;
            color: #6c6c6c;
            cursor: pointer;
        }
        .search_box{
            display: flex;
            border-radius: 12px;
            margin-right: 0;
            padding: 3px 3px 3px 5px;
            width: 200px;
            .search{
                input{
                    border: 0;
                    outline: 0;
                    font-size: 20px;
                    width: 170px;
                }
            }
            .icon{
                cursor: pointer;
            }
        }
    }
    @media screen and (min-width:240px){
        .menu{
            font-size: 25px;
            color: #6c6c6c;
        }
        .search_box{
            display: flex;
            border-radius: 12px;
            margin-right: 0;
            padding: 3px 3px 3px 5px;
            width: 200px;
            .search{
                input{
                    height: 25px;
                    border: 0;
                    outline: 0;
                    font-size: 16px;
                    width: 160px;
                }
            }
            .icon{
                padding-top: 4px;
                cursor: pointer;
            }
        }
    }

    @media screen and (min-width:680px){
        .logo{
            width: 150px;
        }
        .menu{
            font-size: 35px;
            color: #6c6c6c;
        }
        .search_box{
            display: flex;
            justify-content: space-between;
            border-radius: 12px;
            margin-right: 0;
            padding: 3px 3px 3px 5px;
            width: 440px;
            .search{
                input{
                    border: 0;
                    outline: 0;
                    width: 400px;
                    font-size: 20px;
                }
            }
            .icon{
                cursor: pointer;
            }
        }
    }

    
`