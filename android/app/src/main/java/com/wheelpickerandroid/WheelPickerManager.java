package com.wheelpickerandroid;

import android.graphics.Color;
import com.facebook.react.bridge.*;
import com.facebook.react.uimanager.SimpleViewManager;
import com.aigestudio.wheelpicker.WheelPicker;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.ArrayList;
import java.util.List;

public class WheelPickerManager extends SimpleViewManager<WheelPicker> {

    private static final String REACT_CLASS = "RCTWheelPicker";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public WheelPicker createViewInstance(final ThemedReactContext context) {
        final WheelPicker wheelPicker = new WheelPicker(context);
        wheelPicker.setOnItemSelectedListener(new WheelPicker.OnItemSelectedListener() {
            @Override
            public void onItemSelected(WheelPicker picker, Object data, int position) {
                WritableMap event = Arguments.createMap();
                event.putInt("value", position);
                ReactContext context = (ReactContext) picker.getContext();
                context.getJSModule(RCTEventEmitter.class).receiveEvent(picker.getId(), "topChange", event);
            }
        });
        return wheelPicker;
    }

    @ReactProp(name = "selectedValue", defaultInt = 0)
    public void setSelectedValue(WheelPicker view, int value) {
        view.setSelectedItemPosition(value);
    }

    @ReactProp(name = "data")
    public void setData(WheelPicker view, ReadableArray data) {
        List<Integer> dataSource = new ArrayList<>(data.size());
        for (int i=0; i<data.size(); i++) {
            dataSource.add(data.getInt(i));
        }
        view.setData(dataSource);
    }

    @ReactProp(name= "textSize", defaultInt = 0)
    public void setTextSize(WheelPicker view, int textSize) {
        view.setItemTextSize(textSize);
    }

    @ReactProp(name= "isCurved", defaultBoolean = true)
    public void setIsCurved(WheelPicker view, boolean isCurved) {
        view.setCurved(isCurved);
    }

    @ReactProp(name = "hasAtmospheric", defaultBoolean = true)
    public void setHasAtmospheric(WheelPicker view, boolean hasAtmospheric) {
        view.setAtmospheric(hasAtmospheric);
    }

    @ReactProp(name = "hasIndicator", defaultBoolean = false)
    public void setHasIndicator(WheelPicker view, boolean hasIndicator) {
        view.setIndicator(hasIndicator);
    }

    @ReactProp(name = "indicatorColor", defaultInt = Color.BLACK)
    public void setIndicatorColor(WheelPicker view, String color) {
        view.setIndicatorColor(Color.parseColor(color));
    }

    @ReactProp(name = "indicatorSize", defaultInt = 1)
    public void setIndicatorSize(WheelPicker view, int size) {
        view.setIndicatorSize(size);
    }

    @ReactProp(name = "itemTextColor", defaultInt = Color.GRAY)
    public void setItemTextColor(WheelPicker view, String color) {
        view.setItemTextColor(Color.parseColor(color));
    }

    @ReactProp(name = "selectedItemTextColor", defaultInt = Color.BLACK)
    public void setSelectedItemTextColor(WheelPicker view, String color) {
        view.setSelectedItemTextColor(Color.parseColor(color));
    }
}