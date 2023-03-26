import styled from 'styled-components';

const Styled_story_detail = styled.div`
    /* background-color: red; */
    background-color: #ffebd1;
.title{
    padding: 10px 10px 5px 5px;
    font-size: 20px;
    font-weight: 600;
}

    .info_author{
        margin: 0 5px;
        display: flex;
        justify-content: space-between;
        .react{
            .like{
                font-size: 30px;
                margin-right: 10px;
                cursor: pointer;
            }
            .dislike{
                font-size: 30px;
                cursor: pointer;
            }
        }
        h5{
            font-size: 18px;

        }
    }
    .full-story{
        background-color: aliceblue;
        padding: 10px;
        height: 500px;
        overflow-y: scroll;
        .text{
            /* overflow: scroll; */
            /* height: 100px; */

        }
    }
    
`


export { Styled_story_detail }