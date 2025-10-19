package com.big.code.Backend.dataTransferObject;

public class ApiResponse {
    private String msg;
    private Object object;

    public ApiResponse() {}

    public ApiResponse(String msg){
        this.msg = msg;
    }

    public ApiResponse(String msg, Object object){
        this.msg = msg;
        this.object = object;
    }

    public String getMsg() {
        return msg;
    }

    public Object getObject() {
        return object;
    }
}
