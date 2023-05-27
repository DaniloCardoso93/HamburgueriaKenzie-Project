import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    display: flex;
    height: 155px;
    background-color: var(--grey0);

    img{
        width: 158px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
    }

    form{
        margin-top: 20px;
        width: 320px;
        margin: 10px auto;
        position: relative;

        input{
            width: 100%;
            height: 60px;

            background-color: var(--grey20);
            color: var(--grey50);

            border: 2px solid var(--grey20);
            border-radius: 8px;

            text-indent: 10px;

            
            
        }
        button{
            position: absolute;
            font-size: var(--headline);
            font-weight: var(--semibold-weight);
            width: 107px;
            height: 40px;
            background-color: var(--color-primary);
            border-radius: 8px;
            border: 2px solid var(--color-primary);
            color: #FFFFFF;
            left: 210px;
            top: 12px;
            cursor: pointer;
        }
    }

    @media (min-width:800px) {
            height: 100px;


            div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;

            }
        }

        @media (min-width:1200px) {

            img{
                width: 158px;
                height: 37px;
                display: unset;
                align-items: unset;
                justify-content: unset;
                margin: 20px 0;
            }

            form{
                position: relative;
                margin: 10px 0;

                button{
                    height: 50px;
                    left: 200px;
                    top:8px;
                }
                input{
                    position: relative;
                }
            }
        }

`