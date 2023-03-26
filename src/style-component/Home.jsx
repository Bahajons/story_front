import styled from "@emotion/styled";

export const HomeStyled = styled.div`
font-family: Arial, Helvetica, sans-serif;
    .item{
					margin: 12px 0px;
					/* background-color: #c1c1c1; */
        .img{
					border-radius: 15px;
					overflow: hidden;
					transition: .4s;
					position: relative;
					z-index: -1;
					.time{
						position: absolute;
						right: 10px;
						color: #ffffff;
						z-index: 2222;
						/* top: 0; */
						bottom: -10px;
						padding: 0px 4px;
						border-radius: 5px;
						background-color: black;
						font-size: 12px;
						font-weight: 600;
					}
					}
				:hover{
						.img{
											transition: .4s;
											border-radius: 0;
								}
							}
							.text{
								box-sizing: border-box;
								padding: 2px 8px;
								h5{
									margin:4px 0;
									font-weight: 600;
									color: #585858;
								}
							}


					}


`